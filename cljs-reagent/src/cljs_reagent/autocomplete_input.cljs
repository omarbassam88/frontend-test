(ns cljs-reagent.autocomplete-input
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def base-url "https://jsonplaceholder.typicode.com/posts")

(defn autocomplete-input []
  (let* [query (r/atom "")
         results (r/atom (sorted-map))
         on-search #(do
                      (reset! query (-> % .-target .-value))
                      (go (let [response (<! (http/get base-url))]
                            (reset! results (filter (fn [item] (string/includes? (:title item) @query)) (:body response)))
                            (prn @results))))]
        (fn [] [:div [:input {:placeholder "Type Your Search here"  :on-change on-search}]
                [:div (for [result @results]
                        [:div [:a {:href (str base-url "/" (:id result))
                                   :target "_blank"}
                               (:title result)]])]])))
