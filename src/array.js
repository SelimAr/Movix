const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/9fxmD5um8kqj3lCV3TBVKJqRB4P.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/original/tb9jZzbD9B5d5Vhzdp9Oni128p.jpg",
      ReleaseDate : "2018"
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/1TH4PwfcRPenIxce3BREDIV4mBd.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/9T8sj5io4SGCBTHsk5H8LGcfKVe.jpg",
      ReleaseDate : "2018"
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/Apish2YD3QIAepzxZ96VLkqEZo3.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
      ReleaseDate : "2018"
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/xlJCSHnR7sbaibX3OY97vEmsjxt.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/roYyPiQDQKmIKUEhO912693tSja.jpg",
      ReleaseDate : "2021"
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/84FrvyX2QiAy2QXYSanaCcnqgE1.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/9il7qNbeYnPMYlutsVYDsj4hRyb.jpg",
      ReleaseDate : "2018"
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      ReleaseDate : "1994"
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      ReleaseDate : "1994"
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/moHx8JGzIdEAMLj1CqDzcLYhMRY.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dYjZ27hDw2QFaEIfzbNGwW0IkV9.jpg",
      ReleaseDate : "1995"
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tnR3Og76RVIFUpb2mpi8Oi1GuAk.jpg",
      ReleaseDate : "2010"
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      imageProfile: "https://www.themoviedb.org/t/p/w220_and_h330_face/7xkJ1ACu40BjzLHVPRILWjFvW7.jpg",
      imageBanner: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7y8DnxJoUAbm7XPKh7nznKEhpnI.jpg",
      ReleaseDate : "2014"
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))