import React from "react";
import CustomScrollbars from "util/CustomScrollbars";
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: "Tienda",
      type: "section",
      children: [
        {
          name: "Pedidos",
          icon: "shopping-cart",
          type: "collapse",
          children: [
            {
              name: "Frutas",
              type: "item",
              link: "/app/ecommerce/frutas",
            },
            {
              name: "Verduras",
              type: "item",
              link: "/app/ecommerce/verduras",
            },
          ],
        },
      ],
    },
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus} />
    </CustomScrollbars>
  );
};

export default SideBarContent;
