import { CoffeesPermission } from "../../coffees/coffee.permission";

export const Permission = {
  ...CoffeesPermission,
};

export type PermissionType = CoffeesPermission; // добавить через |
