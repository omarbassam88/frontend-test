(ns cljs-reagent.core
  (:require
   [cljs-reagent.like-dislike :refer [like-dislike]]
   [cljs-reagent.ratings :refer [rating average-rating ratings-list]]
   [cljs-reagent.autocomplete-input :refer [autocomplete-input]]
   [reagent.core :as r]
   [reagent.dom :as d]))

;; -------------------------
;; Views
;;
(def ratings [{:name "test1" :content "test content" :rate 1}
              {:name "test2" :content "test content" :rate 2}
              {:name "test3" :content "test content" :rate 4}
              {:name "test4" :content "test content" :rate 5}])

(defn home-page []
  [:div
   [:h1 "Like/Dislike"]
   [like-dislike]
   [:h1 "Ratings"]
   [:h2 "Rating"]
   [rating :name "rating" :content "test" :rate 3]
   [:h2 "Average Rating"]
   [average-rating ratings]
   [:h2 "Ratings List"]
   [ratings-list ratings]
   [:h1 "Autocomplete Input"]
   [autocomplete-input]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
