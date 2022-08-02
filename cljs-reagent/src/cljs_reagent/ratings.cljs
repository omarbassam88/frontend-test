(ns cljs-reagent.ratings)

(defn rating [& {:keys [name content rate]}]
  [:div (for [star (range 1 6)]
          [:i {:class (str "fa fa-star " (when (<= star rate) "filled"))}])])

(defn average-rating [ratings]
  (let* [sum (reduce (fn [acc rating] (+ acc (:rate rating))) 0 ratings)
         average (Math/ceil (/ sum (count ratings)))]
        [rating :name "average-rating" :content "Average Rating" :rate average]))

(defn ratings-list [ratings]
  [:div
   (for [item ratings]
     [rating :name (:name item) :content (:content item) :rate (:rate item)])])
