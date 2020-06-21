import React from "react";
import Faker from "faker";
import DashboardIcon from '@material-ui/icons/Dashboard';
import GridOn from "@material-ui/icons/GridOn";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Web from "@material-ui/icons/Web";
import PeopleIcon from '@material-ui/icons/People';
import BorderClear from "@material-ui/icons/BorderClear";
import StorefrontIcon from '@material-ui/icons/Storefront';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import BorderOuter from "@material-ui/icons/BorderOuter";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const data = {
  menus: [
    { text: "DashBoard", icon: <DashboardIcon />, link: "/dashboard" },
    
    {
      text: "Users",
      icon: <PeopleIcon/>,
      // link: "/table",
      subMenus: [
        {
          text: "Users",
          icon: <BorderClear />,
          link: "/addproduct"
        },
        {
          text: "Roles",
          icon: <BorderOuter />,
          link: "/allproducts"
        },
        {
          text: "Groups",
          icon: <BorderOuter />,
          link: "/allproducts"
        }
      ]
    },
    { text: "Brands", icon: <NotListedLocationIcon />, link: "/login" },
    {
      text: "Store",
      icon: <StorefrontIcon/>,
      // link: "/table",
      subMenus: [
        {
          text: "New Store",
          icon: <BorderClear />,
          link: "/addstore"
        },
        {
          text: "Stores",
          icon: <BorderOuter />,
          link: "/allstores"
        }
      ]
    },
  
    {
      text: "Products",
      icon: <ShoppingCartTwoToneIcon/>,
      // link: "/table",
      subMenus: [
        {
          text: "Add Product",
          icon: <BorderClear />,
          link: "/addproduct"
        },
        {
          text: "All Products",
          icon: <BorderOuter />,
          link: "/allproducts"
        }
      ]
    },
    {
      text: "Orders",
      icon: <ShoppingCartTwoToneIcon/>,
      // link: "/table",
      subMenus: [
        {
          text: "Add Order",
          icon: <BorderClear />,
          link: "/addproduct"
        },
        {
          text: "All Orderss",
          icon: <BorderOuter />,
          link: "/allproducts"
        }
      ]
    },
  
    {
      text: "Categories",
      icon: <GridOn />,
      // link: "/table",
      subMenus: [
        {
          text: "Add Category",
          icon: <Web />,
          link: "/addcategory"
        },
        {
          text: "All Categories",
          icon: <Web />,
          link: "/allcategory"
        }
      ]
    }, { text: "Reports", icon: <PermIdentity />, link: "/login" },
    { text: "Company", icon: <PermIdentity />, link: "/login" },
    { text: "Logout", icon: <PermIdentity />, link: "/login" }
  ],
  user: {
    userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    avatar: Faker.image.avatar()
  },
  tablePage: {
    items: Array.from({ length: 105 }, (item, index) => ({
      id: index,
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      category: Faker.commerce.productMaterial()
    }))
  },
  dashBoardPage: {
    recentProducts: [
      {
        id: 1,
        title: "Samsung TV",
        text: "Samsung 32 1080p 60Hz LED Smart HDTV."
      },
      { id: 2, title: "Playstation 4", text: "PlayStation 3 500 GB System" },
      {
        id: 3,
        title: "Apple iPhone 6",
        text: "Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G "
      },
      {
        id: 4,
        title: "Apple MacBook",
        text: "Apple MacBook Pro MD101LL/A 13.3-Inch Laptop"
      }
    ],
    monthlySales: [
      { name: "Jan", uv: 3700 },
      { name: "Feb", uv: 3000 },
      { name: "Mar", uv: 2000 },
      { name: "Apr", uv: 2780 },
      { name: "May", uv: 2000 },
      { name: "Jun", uv: 1800 },
      { name: "Jul", uv: 2600 },
      { name: "Aug", uv: 2900 },
      { name: "Sep", uv: 3500 },
      { name: "Oct", uv: 3000 },
      { name: "Nov", uv: 2400 },
      { name: "Dec", uv: 2780 }
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 }
    ],
    browserUsage: [
      { name: "Chrome", value: 800 },
      { name: "Firefox", value: 300 },
      { name: "Safari", value: 300 }
    ]
  }
};

export default data;
