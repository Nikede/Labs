let Like = {
  count: 0,
  doDisLike: function () {
    if (this.count > 0) {
      this.count--;
    }
  },
  doLike: function () {
      this.count++;
  }
}