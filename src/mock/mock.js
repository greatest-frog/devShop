const goods = {
  "152ed03e955f4f9188e925d96b8ceb21": {
    id: "152ed03e955f4f9188e925d96b8ceb21",
    name: "MSI Nvidia GeForce RTX 4090",
    characteristics: {
      main: {
        title: "Main characteristics",
        chars: {
          type: {
            name: "Product type",
            value: "Component",
          },
          element: {
            name: "Type of component",
            value: "Graphics card",
          },
          manufacturer: {
            name: "Manufacturer",
            value: "MSI",
          },
          release: {
            name: "Release date",
            value: "2022",
          },
        },
      },
      gpu: {
        title: "GPU characteristics",
        chars: {
          chipManufacturer: {
            name: "GPU manufacturer",
            value: "Nvidia",
          },
          series: {
            name: "GPU series",
            value: "RTX 40",
          },
          model: {
            name: "GPU model",
            value: "RTX 4090",
          },
        },
      },
    },
    type: "Component",
    element: "Graphics card",
    chipManufacturer: "Nvidia",
    series: "RTX 40",
    model: "RTX 4090",
    special: new Set(["new", "sale"]),
    date: "2022-12-06",
    manufacturer: "MSI",
    description:
      "The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It’s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.",
    price: 2200,
    previousPrice: 2300,
    currency: "$",
    release: "2022",
    src: "/resources/images/products/msi-nvidia-geforce-rtx-4090.png",
    number: 10,
    reviews: {
      aae57e5d1bb742028af240e84b5b1e65: {
        id: "aae57e5d1bb742028af240e84b5b1e65",
        title: "The Best GPU",
        author: "Marry",
        pros: "Powerful, good design",
        cons: "No",
        description: "Very good video card, although expensive.",
        rating: 5,
      },
    },
  },
  f758d6358c6b4551ad926bc25a24a3dc: {
    id: "f758d6358c6b4551ad926bc25a24a3dc",
    name: "Gigabyte Nvidia GeForce RTX 3070 Ti",
    characteristics: {
      main: {
        title: "Main characteristics",
        chars: {
          type: {
            name: "Product type",
            value: "Component",
          },
          element: {
            name: "Type of component",
            value: "Graphics card",
          },
          manufacturer: {
            name: "Manufacturer",
            value: "Gigabyte",
          },
          release: {
            name: "Release date",
            value: "2021",
          },
        },
      },
      gpu: {
        title: "GPU characteristics",
        chars: {
          chipManufacturer: {
            name: "GPU manufacturer",
            value: "Nvidia",
          },
          series: {
            name: "GPU series",
            value: "RTX 30",
          },
          model: {
            name: "GPU model",
            value: "RTX 3070 Ti",
          },
        },
      },
    },
    type: "Component",
    element: "Graphics card",
    chipManufacturer: "Nvidia",
    series: "RTX",
    generation: "RTX 30",
    model: "3070 Ti",
    special: new Set(["new"]),
    date: "2022-10-17",
    manufacturer: "Gigabyte",
    description:
      "NVIDIA Ampere Streaming Multiprocessors 2nd Generation RT Cores 3rd Generation Tensor Cores Powered by GeForce RTX 3070 Ti Integrated with 8GB GDDR6X 256-bit memory interface WINDFORCE 3X Cooling System with alternate spinning fans RGB Fusion 2.0 Protection metal back plate 2x HDMI 2.1, 2x DisplayPort 1.4 Core Clock: 1830 MHz. Get the ultimate gaming performance with AORUS RTX 3070 Ti Graphics Cards.",
    price: 1000,
    currency: "$",
    release: "2021",
    src: "/resources/images/products/gigabyte-nvidia-geforce-rtx-3070-ti.jpg",
    number: 5,
    reviews: {
      "1603fd45fa1a457792da577a7f1e19e6": {
        id: "1603fd45fa1a457792da577a7f1e19e6",
        title: "Normal Card",
        author: "Ivan",
        pros: "Low price",
        cons: "Bad quality",
        description: "The fan is rattling",
        rating: 4,
      },
    },
  },

  "4449ef5138c04b9fbfd54003ca987423": {
    id: "4449ef5138c04b9fbfd54003ca987423",
    name: "AMD Ryzen 5 5600X BOX",
    characteristics: {
      main: {
        title: "Main characteristics",
        chars: {
          type: {
            name: "Product type",
            value: "Component",
          },
          element: {
            name: "Type of component",
            value: "Processor",
          },
          manufacturer: {
            name: "Manufacturer",
            value: "AMD",
          },
          release: {
            name: "Release date",
            value: "2020",
          },
        },
      },
      cpu: {
        title: "CPU characteristics",
        chars: {
          series: {
            name: "CPU series",
            value: "Ryzen 5000",
          },
          model: {
            name: "CPU model",
            value: "Ryzen 5 5600X",
          },
        },
      },
    },
    type: "Component",
    element: "Processor",
    series: "Ryzen",
    generation: "Ryzen 5000",
    model: "5600X",
    special: new Set(["new"]),
    date: "2020-12-07",
    manufacturer: "AMD",
    description:
      "Be unstoppable with the unprecedented speed of the world’s best desktop processors. AMD Ryzen 5000 Series processors deliver the ultimate in high performance, whether you’re playing the latest games, designing the next skyscraper or crunching scientific data. With AMD Ryzen, you’re always in the lead.",
    price: 230,
    currency: "$",
    release: "2020",
    src: "/resources/images/products/amd-ryzen-5-5600x-box.png",
    number: 7,
    reviews: {
      ea36269cc5ad4124a906396e9e93232f: {
        id: "ea36269cc5ad4124a906396e9e93232f",
        title: "The Best CPU",
        author: "Mike",
        pros: "Good performance",
        cons: "No",
        description:
          "I think this is the best investment I have ever made in my computer. FPS increased by 1.5 times, and rendering by 2.",
        rating: 5,
      },
      c3245c7533ea493e9a864eb811f31654: {
        id: "c3245c7533ea493e9a864eb811f31654",
        date: "2022-01-20",
        title: "Great solution for PC",
        author: "Don",
        pros: "Cheap, good quality",
        cons: "No",
        description:
          "I took this processor with a great discount, it has been working for a year, no problems",
        rating: 5,
      },
    },
  },

  "945041436362491ab408b164fafa7a5d": {
    id: "945041436362491ab408b164fafa7a5d",
    name: "be quiet! Dark Power Pro 12 1500W",
    characteristics: {
      main: {
        title: "Main characteristics",
        chars: {
          type: {
            name: "Product type",
            value: "Component",
          },
          element: {
            name: "Type of component",
            value: "Power Supply",
          },
          manufacturer: {
            name: "Manufacturer",
            value: "be quiet!",
          },
          release: {
            name: "Release date",
            value: "2022",
          },
        },
      },
      powerSupply: {
        title: "Power supply characteristics",
        chars: {
          series: {
            name: "Power supply series",
            value: "Dark Power Pro 12",
          },
          model: {
            name: "Power supply model",
            value: "Dark Power Pro 12 1500W",
          },
          certificate: {
            name: "Certificate",
            value: "80 PLUS Titanium",
          },
        },
      },
    },
    type: "Component",
    element: "Power supply",
    series: "Dark Power Pro 12",
    certificate: "80 PLUS Titanium",
    special: new Set(["new"]),
    date: "2021-09-05",
    manufacturer: "be quiet!",
    description:
      "The be quiet! Dark Power Pro 12 1500W offers 80 PLUS Titanium efficiency and world class performance due to fully digital control and frameless fan concept. The most technologically-advanced PSU be quiet! has ever built.",
    price: 380,
    currency: "$",
    release: "2022",
    src: "/resources/images/products/be-quiet-dark-power-pro-12-1500w.png",
    number: 10,
    reviews: {
      "0c5437d1fb094d6094ac4c60e8c63b5e": {
        id: "0c5437d1fb094d6094ac4c60e8c63b5e",
        title: "Perfect Power supply",
        author: "Mike",
        pros: "Powerful, cheap.",
        cons: "",
        description: "Good, quiet power supply< suitable for powerful builds",
        rating: 5,
      },
    },
  },

  "34376c67997a4cbca94d0a89f4f9a33a": {
    id: "34376c67997a4cbca94d0a89f4f9a33a",
    name: "PowerColor AMD Radeon RX 6600",
    characteristics: {
      main: {
        title: "Main characteristics",
        chars: {
          type: {
            name: "Product type",
            value: "Component",
          },
          element: {
            name: "Type of component",
            value: "Graphics card",
          },
          manufacturer: {
            name: "Manufacturer",
            value: "PowerColor",
          },
          release: {
            name: "Release date",
            value: "2021",
          },
        },
      },
      gpu: {
        title: "GPU characteristics",
        chars: {
          chipManufacturer: {
            name: "GPU manufacturer",
            value: "AMD",
          },
          series: {
            name: "GPU series",
            value: "RX 6000",
          },
          model: {
            name: "GPU model",
            value: "RX 6600",
          },
        },
      },
    },
    type: "Component",
    element: "Graphics card",
    chipManufacturer: "AMD",
    series: "Radeon RX",
    generation: "RX 6000",
    model: "RX 6600",
    special: new Set(["new", "sale"]),
    manufacturer: "PowerColor",
    description:
      "Powercolor Fighter Amd Radeon Rx 6600 Graphics Card With 8Gb Gddr6 Memory.",
    price: 310,
    previousPrice: 330,
    currency: "$",
    release: "2021",
    src: "/resources/images/products/powercolor-amd-radeon-rx-6600.png",
    number: 2,
    reviews: {
      a9345f6bfc6c4443eb5873175d8536be9: {
        id: "a9345f6bfc6c4443eb5873175d8536be9",
        title: "Good video card",
        author: "Jake",
        pros: "Performance",
        cons: "Unstable",
        description: "Good performance except for some freezes",
        rating: 5,
      },
    },
  },
  "22b9c3ac926240a48fc8435cc8b702b0": {
    id: "22b9c3ac926240a48fc8435cc8b702b0",
    name: "ASUS AMD Radeon RX 6800 XT",
    characteristics: {
      main: {
        title: "Main characteristics",
        chars: {
          type: {
            name: "Product type",
            value: "Component",
          },
          element: {
            name: "Type of component",
            value: "Graphics card",
          },
          manufacturer: {
            name: "Manufacturer",
            value: "ASUS",
          },
          release: {
            name: "Release date",
            value: "2020",
          },
        },
      },
      gpu: {
        title: "GPU characteristics",
        chars: {
          chipManufacturer: {
            name: "GPU manufacturer",
            value: "AMD",
          },
          series: {
            name: "GPU series",
            value: "RX 6000",
          },
          model: {
            name: "GPU model",
            value: "RX 6800 XT",
          },
        },
      },
    },
    type: "Component",
    element: "Graphics card",
    chipManufacturer: "AMD",
    series: "Radeon RX",
    generation: "RX 6000",
    model: "RX 6800 XT",
    special: new Set(["new"]),
    manufacturer: "ASUS",
    description:
      "The TUF GAMING Radeon™ RX 6800 XT is a tenacious beast with a tough metal exterior, super-efficient cooling, and components that offer enhanced endurance.",
    price: 1000,
    currency: "$",
    release: "2020",
    src: "/resources/images/products/asus-amd-radeon-rx-6800-xt.png",
    number: 4,
    reviews: {
      a9345f6bfc6c4443eb5873175d8536be9: {
        id: "a9345f6bfc6c4443eb5873175d8536be9",
        title: "Answer for Nvidia's videos cards",
        author: "Jake",
        pros: "Price, performance, design",
        cons: "No",
        description:
          "Great graphics card that outperforms nvidia graphics cards.",
        rating: 5,
      },
    },
  },
};

export default goods;
