export const HoteladminSidebarMenus = [
  {
    title: "Dashboard",
    link: "/hoteladmin",
    icon: "/admin/img/menu-icon/dashboard.svg",
  },
  {
    title: "My Hotel",
    link: "/hoteladmin/hotel/update",
    icon: "/admin/img/menu-icon/hotel.png",
  },
  {
    title: "Room Type",
    parent: true,
    icon: "/admin/img/menu-icon/room.svg",
    children: [
      {
        title: "Create",
        link: "/hoteladmin/room/create",
      },
      {
        title: "Listing",
        link: "/hoteladmin/room",
      },
    ],
  },
  {
    title: "Rooms",
    parent: true,
    icon: "/admin/img/menu-icon/directory.svg",
    children: [
      {
        title: "Create",
        link: "/hoteladmin/room-directory/create",
      },
      {
        title: "Listing",
        link: "/hoteladmin/room-directory",
      },
    ],
  },
  {
    title: "Bookings",
    parent: true,
    icon: "/admin/img/menu-icon/booking.png",
    children: [
      {
        title: "Current Bookings",
        link: "/hoteladmin/booking/current",
      },
      {
        title: "History",
        link: "/hoteladmin/booking/history",
      },
    ],
  },
  {
    title: "Gallery",
    link: "/hoteladmin/gallery",
    icon: "/admin/img/menu-icon/gallery.svg",
  },
];
