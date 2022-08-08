const app = Vue.createApp({
  data() {
    return {
      url: "http://www.thenetninja.ic.uk",
      showBooks: true,
      title: "my dream",
      author: "mohamed taher",
      age: 37,
      count: 0,
      x: 0,
      y: 0,
      books: [
        {
          title: "the way of king",
          author: "brandon penderson",
          img: "assets/coffee.avif",
          isFav: true,
        },
        {
          title: "the empire",
          author: "jack rosh",
          img: "assets/house.avif",
          isFav: false,
        },
        {
          title: "the beautful life",
          author: "lisa hopson",
          img: "assets/humain.avif",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(titleToChange) {
      this.title = titleToChange;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(title) {
      this.books = this.books.map(book =>
        book.title === title ? { ...book, isFav: !book.isFav } : book
      );
    },
    toggleLi(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav);
    },
  },
});

app.mount("#app");
