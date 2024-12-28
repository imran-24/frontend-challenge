/* eslint-disable react/prop-types */
import  { useEffect, useRef } from "react";
import Food from "./food";
import { useCategoryStore } from "../../../hooks/category-store";

const MenuItem = ({ item: menu }) => {
    const categoryRef = useRef(null);
    const categoryStore = useCategoryStore();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // console.log("Category on display:", menu.category);
                        categoryStore.update(menu.category);

                    }
                });
            },
            { threshold: 0.5 } // Adjust this threshold as needed
        );

        if (categoryRef.current) {
            observer.observe(categoryRef.current);
        }

        return () => {
            if (categoryRef.current) {
                observer.unobserve(categoryRef.current);
            }
        };
    }, [menu.category]);

    return (
        <div id={`#${menu.href}`}  className="space-y-2" ref={categoryRef}>
            <p className="text-2xl font-semibold">{menu.category}</p>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                {menu.items.map((item, index) => (
                    <Food food={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default MenuItem;