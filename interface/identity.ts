export enum IdentityStatus {
  Review = 1,           // 认证待审核
  Failed = 2,           // 认证失败
  Success = 3,          // 认证成功
  Upgrading = 4,        // 认证升级中
  UpgradFailed = 5,     // 认证升级失败
  Obsolted = 6          // 认证失效
}