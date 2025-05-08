export const apiRouter = {
  //Auth
  refreshToken: "/auth/refresh",
  loginUser: "/auth/login",
  logoutUser: "/auth/logout",
  requestOtp : "/auth/request_otp",
  verifyOtp : "/auth/verify_otp",
  resetPassword: "/auth/reset_password",

  //User
  listUser: "/user/list",
  createUser: "/user/create",
  deleteUser: "/user/delete/:id",
  updateUser: "/user/update",
  detailUser: "/user/detail/:id",

  //Lodging
  listTypeLodging: "/lodging_type/list",
  listLodgingByUser: "/lodging/list_by_user",
  listLodging: "/lodging/list",
  createLodging: "/lodging/create",
  overviewLodging: "lodging/overview",
  detailLodging: "/lodging/detail/:id",
  updateLodging: "/lodging/update",
  deleteLodging: "/lodging/delete/:id",
  restoreLodging: "/lodging/restore/:id",
  //General
  listProvince: "/general/provinces",
  listDistrict: "/general/districts",
  listWard: "/general/wards",

  //Permission
  listPermissionByUser: "/permission/list_by_user",

  //Service
  listService: "/service/list",

  //Unit
  listUnit: "/unit/list",
  listUnitByService: "/unit/list_by_service",

  //LodgingService
  createLodgingService: "/lodging_service/create",
  listLodgingService: "/lodging_service/list/:lodging_id",
  detailLodgingService: "/lodging_service/detail/:id",
  updateLodgingService: "/lodging_service/update",
  deleteLodgingService: "/lodging_service/delete",
  listLodgingServiceByRoom: "/lodging_service/list_by_room",
  //Room
  createRoom: "/room/create",
  listRoomByLodging: "/room/list/:lodging_id",
  detailRoom: "/room/detail/:id",
  updateRoom: "/room/update",
  filterRoom: "/room/filter",
  deleteRoom: "/room/delete",

  //CreateContract
  createContract: "/contract/create",
  listContract: "/contract/list",
  detailContract: "/contract/detail/:id",
  updateContract: "/contract/update",
  debtContract: "/contract/debt/:id",
  createFinalBill: "/contract/create_final_bill",

  //Feedback
  createFeedback: "/feedback/create",
  listFeedback: "/feedback/list",
  detailFeedback: "/feedback/detail/:id",
  updateStatusFeedback: "/feedback/update_status",
  listFeedbackByUser: "/feedback/list_by_user",

  // Notification
  listNotification: "/notification/list",

  //Equipment
  listEquipment: "/equipment/list",
  createEquipment: "/equipment/create",
  detailEquipment: "/equipment/detail/:id",
  updateEquipment: "/equipment/update",
  deleteEquipment: "/equipment/delete",

  //RentalHistory
  listRentalHistory: "/rental_history/list",

  //RoomUsage
  listRoomUsageNeedClose: "/room_usage/list_need_close",
  closeRoomUsage: "/room_usage/close_room_usage",

  //ServicePayment
  listServicePayment: "/service_payment/list",


  //List channel
  listChannel: "channel/list",

  //Chat
  createChat: "chat/create",
  listChat: "chat/list",

  //Payment
  paymentByContract: "/payment/payment_by_contract",

  //Dashboard
  overviewDashboard: "/dashboard/overview"
};
