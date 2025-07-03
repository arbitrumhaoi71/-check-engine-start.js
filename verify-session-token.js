// Kiểm tra token phiên đăng nhập
function verifySession(token) {
  return token.startsWith("sess_");
}
