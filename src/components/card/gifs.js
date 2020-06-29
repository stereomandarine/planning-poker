

export const getGif = size => {
  const { urls } = gifs.find(item => item.type === size)
  var url = urls[Math.floor(Math.random() * urls.length)]
  return url
}

export const frontDeck = [
  "https://media3.giphy.com/media/xT9DPlAUKTl1GeZjC8/giphy.gif",
  "https://media0.giphy.com/media/XE735s8FjgBTYHSUAu/giphy.gif",
  "https://media0.giphy.com/media/l0G16t79ORwuWda7K/giphy.gif",
  "https://media1.giphy.com/media/Dps6uX4XPOKeA/giphy.gif",
  "https://media0.giphy.com/media/ggX0rPlSMJZIQYHon6/giphy.gif",
  "https://media2.giphy.com/media/l3vR6aasfs0Ae3qdG/giphy.gif",
]
export const gifs = [
  {
    type: "coffee",
    urls: [
        "https://media0.giphy.com/media/3oriO04qxVReM5rJEA/giphy.gif",
        "https://media1.giphy.com/media/zJ8ldRaGLnHTa/giphy.gif",
        "https://media0.giphy.com/media/ceeFbVxiZzMBi/giphy.gif",
        "https://media1.giphy.com/media/3o7WTrvW0BNBaHrF4c/giphy.gif",
        "https://media3.giphy.com/media/3jVT4U5bilspG/giphy.gif",
        "https://media3.giphy.com/media/DrJm6F9poo4aA/giphy.gif",
        "https://media3.giphy.com/media/12yjKJaLB7DuG4/giphy.gif"
    ],
  },
  {
    type: "0",
    urls: [
        "https://media1.giphy.com/media/VFMvpytJJz4RvjQgbJ/giphy.gif",
        "https://media1.giphy.com/media/htRB83wtJpWNtf9d5V/giphy.gif",
        "https://media3.giphy.com/media/tJBgiJz8bYAzuEhhjq/giphy.gif",
        "https://media1.giphy.com/media/m8YFup5AVSW4/giphy.gif",
        "https://media2.giphy.com/media/dVvB1VNNruS873qqQk/giphy.gif",
        "https://media3.giphy.com/media/mGcWEjGiQT1iYnucVr/giphy.gif"
    ],
  },
  {
    type: "1",
    urls: [
      "https://media0.giphy.com/media/H1BPj3Ormiv8yIxNEs/giphy.gif",
      "https://media0.giphy.com/media/DCHWFglWF8N3ZuvkF2/giphy.gif",
      "https://media0.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif",
      "https://media1.giphy.com/media/3o6ozAc3eCahwy4Cpq/giphy.gif",
      "https://media2.giphy.com/media/2tKbtEbIEsT6NpvoUw/giphy.gif",
      "https://media3.giphy.com/media/QF2WD4x2YBUPK/giphy.gif",
      "https://media1.giphy.com/media/KCLoG9ANxGc29e3qJB/giphy.gif",
      "https://media1.giphy.com/media/9V90BOzrzlUJDp7Ai0/giphy.gif",
      "https://media0.giphy.com/media/2ysSKecCr9tNFSpQwa/giphy.gif",
      "https://media3.giphy.com/media/xUOrwekyFAu3uLwBag/giphy.gif",
    ],
  },
  {
    type: "2",
    urls: [
      "https://media3.giphy.com/media/TEkr9oBZ57KFmMWScZ/giphy.gif",
      "https://media1.giphy.com/media/xTiN0h0Kh5gH7yQYUw/giphy.gif",
      "https://media3.giphy.com/media/fBGlnzGjFL3dSdvTBo/giphy.gif",
      "https://media2.giphy.com/media/l3dj5LWJko3vzjmOk/giphy.gif",
      "https://media0.giphy.com/media/QTyUhQBltoBFqIsHiG/giphy.gif",
      "https://media2.giphy.com/media/OxeCmRsZsXSCI/giphy.gif",
      "https://media3.giphy.com/media/l378wGtG2aQgZJT32/giphy.gif",
      "https://media0.giphy.com/media/g4UyjsRc7UaJDSlToO/giphy.gif",
      "https://media2.giphy.com/media/3o7buhcjfCDSU5Vhhm/giphy.gif",
      "https://media0.giphy.com/media/WnOaVlxpqg308euFof/giphy.gif",
    ],
  },
  {
    type: "3",
    urls: [
      "https://media2.giphy.com/media/4HrLxAJqT8EftF2VU6/giphy.gif",
      "https://media2.giphy.com/media/f3dLXEhDoZpmfJI97X/giphy.gif",
      "https://media0.giphy.com/media/eK0KmfDFJWcwkmFBBT/giphy.gif",
      "https://media2.giphy.com/media/3ov9kaW3wyiefU3GGA/giphy.gif",
      "https://media1.giphy.com/media/d7id4BY2NQnJe/giphy.gif",
      "https://media2.giphy.com/media/LYteZEhAz0OkLV8HX0/giphy.gif",
      "https://media2.giphy.com/media/cexCJ0OZxxkUU/giphy.gif",
      "https://media1.giphy.com/media/1dH18YpAr1yFPU5AX6/giphy.gif",
      "https://media1.giphy.com/media/l1J9rzUKxMKaz05Lq/giphy.gif",
      "https://media3.giphy.com/media/3oxHQyyWswxHCJIuHK/giphy.gif",
    ],
  },
  {
    type: "5",
    urls: [
        "https://media3.giphy.com/media/3o7btP4i5D6PWhJ2fK/giphy.gif",
        "https://media1.giphy.com/media/3ov9k1lJ0A2o4OQew8/giphy.gif",
        "https://media2.giphy.com/media/l2R0ae5D2C9OYYVC8/giphy.gif",
        "https://media3.giphy.com/media/Rlw6Y6wUSOhwU3aYFn/giphy.gif",
        "https://media0.giphy.com/media/ZBsuGxu0pY4akRxzjG/giphy.gif",
        "https://media0.giphy.com/media/3oKIPuzqJQusn18UOk/giphy.gif",
        "https://media0.giphy.com/media/gJ2sRyTS2tBEwXkLZT/giphy.gif",
        "https://media1.giphy.com/media/J4PdCVs5hlIrdHkVWP/giphy.gif",
        "https://media3.giphy.com/media/l0MYvylkok81GPD20/giphy.gif",
        "https://media0.giphy.com/media/Q5imCx8O3fOF1HihfR/giphy.gif"
    ],
  },
  {
    type: "8",
    urls: [
        "https://media2.giphy.com/media/1dLpY1tUwvNAgJdTZT/giphy.gif",
        "https://media3.giphy.com/media/lStHCp4jUtm0D75ZCa/giphy.gif",
        "https://media3.giphy.com/media/BcIk6DJLAjmt5ov3q2/giphy.gif",
        "https://media0.giphy.com/media/X8M8GinkquNRfaqDAH/giphy.gif",
        "https://media0.giphy.com/media/hR0L4rZtckjy4iXo9a/giphy.gif",
        "https://media2.giphy.com/media/2pVNVd922Igak/giphy.gif",
        "https://media0.giphy.com/media/l4Ho0JLF79EP2INTa/giphy.gif",
        "https://media0.giphy.com/media/fkeLNBr7pdr0c/giphy.gif",
        "https://media0.giphy.com/media/WqXGZZOTbSWnGgNJtd/giphy.gif",
        "https://media0.giphy.com/media/J26WpNHVJrjqefDP0O/giphy.gif"
    ],
  },
  {
    type: "13",
    urls: [
        "https://media3.giphy.com/media/l0HlSBAUM5fbwSzhC/giphy.gif",
        "https://media0.giphy.com/media/8PuWB2Qq49GQ8/giphy.gif",
        "https://media2.giphy.com/media/s9FnbSA9469AQ/giphy.gif",
        "https://media3.giphy.com/media/1mihp0aJGDhxet9nl3/giphy.gif",
        "https://media2.giphy.com/media/fQl9tK2WWNznPY3ii5/giphy.gif",
        "https://media2.giphy.com/media/fQl9tK2WWNznPY3ii5/giphy.gif",
        "https://media2.giphy.com/media/3ohzdQj8IfbM10gi3u/giphy.gif"
    ],
  },
  {
    type: "20",
    urls: [
        "https://media1.giphy.com/media/3dkWoKKGdEbz1JCNvY/giphy.gif",
        "https://media3.giphy.com/media/o9OnCf0f1hHlm/giphy.gif",
        "https://media2.giphy.com/media/3ohjUZAsC6EgyZV6cU/giphy.gif",
        "https://media3.giphy.com/media/o9OnCf0f1hHlm/giphy.gif",
        "https://media2.giphy.com/media/l0MYO6KvZeNjc1LQk/giphy.gif"
    ],
  },
  {
    type: "40",
    urls: [
        "https://media2.giphy.com/media/RNbmw4dtF0YSg3Ds8q/giphy.gif",
        "https://media3.giphy.com/media/3pZcDXvc6abHWhC1kw/giphy.gif"
    ],
  },
  {
    type: "100",
    urls: [
        "https://media2.giphy.com/media/l41lLuV3wRmJ0DxCw/giphy.gif",
        "https://media0.giphy.com/media/55m94rf4C5jvSffVHE/giphy.gif"
    ],
  },
]
