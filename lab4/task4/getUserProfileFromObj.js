function getUserProfileFromObj(profile) {
  if (typeof profile === 'object' && 'username' in profile && 'email' in profile) {
    return {
      username: profile.username,
      email: profile.email
    };
  }
  return null;
}