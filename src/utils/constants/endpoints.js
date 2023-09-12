
const LOCALHOST = "https://localhost:7153/api/v1/";

const ENDPOINTS = {

  auth: {
    signIn: "auth/signin",
    signUp: "auth/signup"
  },

  adm: {
    getRoles: "adm/getRoles",
    createEmployee: "adm/createEmployee",
    employees: "adm/employees"
  },
  
  forgotPassword: {
    sendEmailCodeResetPassword: "forgot-password/send-recovery-token",
    verifyEmailCode: "forgot-password/validate-recovery-token",
    resetPassword: "forgot-password/reset-password"
  },

  accounts: {
    getAccountIdByEmail: "accounts/get-id",
    changeWarehouse: "accounts/change-warehouse"
  },

  userAccount: {
    updateUserAccountInfo: "user/{id}",
    getAllUserInfo: "user/id={id}",
  },

  products: {
    get: "products/get/{id}",
    getAll: "products",
    createProduct: "products",
    getProductNames: "products/get-names",
    getPurchaseOrders: "products/getPurchaseOrders"
  },

  movements: {
    moveProduct: "products/move"
  },

  manufacturers: {
    getAll: "manufacturers",
    createManufacturer: "manufacturers"
  },

  suppliers: {
    getAll: "suppliers",
    createSupplier: "suppliers"
  },

  warehouses: {
    getWithAdressByUser: "warehouses/get-with-address-by-user",
    getWithAdress: "warehouses/get-with-address",
    create: "warehouses",
    getAll: "warehouses",
  },

  addresses: {
    getFormattedAddresses: "address/get-formatted-addresses"
  },
};

export { LOCALHOST, ENDPOINTS };
