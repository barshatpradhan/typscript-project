"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyUser = exports.UserPermissions = void 0;
var UserPermissions;
(function (UserPermissions) {
    UserPermissions["ADMIN"] = "ADMIN";
    UserPermissions["READ_ONLY"] = "READ_ONLY";
})(UserPermissions || (exports.UserPermissions = UserPermissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (exports.LoyaltyUser = LoyaltyUser = {}));
