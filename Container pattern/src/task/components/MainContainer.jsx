import React, { useEffect, useRef, useState } from "react";

const TAB_DETAILS = [
  {
    title: "Products",
    name: "products",
    active: true,
  },
  {
    title: "Cart",
    name: "cart",
    active: false,
  },
];

const MainContainer = () => {
  const [tabDetails, setTabDetails] = useState(TAB_DETAILS);
  const cartCountRef = useRef(0);
  const selectedTabRef = useRef(0);

  useEffect(() => {
    setTabDetails((prev) =>
      prev.map((prev) => {
        if (prev.name.toLowerCase() === "cart") {
          return { ...prev, title: `Cart (${cartCountRef.current})` };
        }
        return prev;
      })
    );
  }, []);

  function handleTabClick(id) {
    selectedTabRef.current = id;
    const selectedTitle = tabDetails[id].name;
    setTabDetails((prev) =>
      prev.map((prev) => {
        if (prev.name === selectedTitle) {
          return { ...prev, active: true };
        }
        return { ...prev, active: false };
      })
    );
  }

  const handleCartCount = (val) => {
    cartCountRef.current = val;
  };


};
