function getUserProfileFromObj(profile) {
  if (typeof profile === 'object' && 'id' in profile && 'username' in profile && 'email' in profile) {
    profileToReturn = {
      username: profile.username,
      email: profile.email
    }
    return profileToReturn;
  }
  return null;
}