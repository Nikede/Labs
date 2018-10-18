/**
 * Selects username and email from profile.
 *
 * @param {object} profile - profile.
 * @return {object} username and email of profile.
 */
function getUserProfileFromObj(profile) {
  if (typeof profile === 'object' && 'username' in profile && 'email' in profile) {
    return {
      username: profile.username,
      email: profile.email
    };
  }
  return null;
}