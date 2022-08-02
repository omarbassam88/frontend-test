(ns cljs-reagent.like-dislike
  (:require [reagent.core :as r]))

(defn like-dislike []
  (let* [countLikes (r/atom 100)
         liked (r/atom false)
         countDislikes (r/atom 25)
         disliked (r/atom false)
         on-like-clicked
         (fn []
           (swap! countLikes (if (not @liked) inc dec))
           (when @disliked (swap! countDislikes dec) (swap! disliked not))
           (swap! liked not))

         on-dislike-clicked
         (fn []
           (swap! countDislikes (if (not @disliked) inc dec))
           (when @liked (swap! countLikes dec) (swap! liked not))
           (swap! disliked not))]

        (fn []
          [:div
           [:button
            {:class (str "like-button " (when @liked "liked")) :on-click #(on-like-clicked)}
            "Likes | " [:span {:class "likes-counter"} @countLikes]]
           [:button
            {:class (str "dislike-button " (when @disliked "disliked")) :on-click #(on-dislike-clicked)}
            "Dislikes | " [:span @countDislikes]]])))
