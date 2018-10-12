let Like = {
  count: 0,
  getDisLike: function () {
    if (this.count > 0) {
      this.count--;
    }
    return this.count;
  },
  getLike: function () {
      this.count++;
      return this.count;
  }
}