import { Category } from './classes.model';

export var CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Angular',
    description:
      'Angular is a platform that makes it easy to build applications with the web.',
    imageURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX////DAC/dADHQADDdAC3DAC3dAC++AADBACTcACbCACjBACDDACvcACroeofdAC7XeobuyM2/ABHAABrcACDbABrmrrXekpz14OPgMkzIMkrVcn/aAAn89PXcAB/bABbNTF/zv8XqiJTncoD+9vfvpa3419v56+2/AAnaAAPwrbXGHz3ytr3ioanhPFTmZnbqvMHkWmztmaLjTGDskpzSYXHMQlf30tbbiJPPVGbfHT7kVmn1xsv65ujkpq7PACbUanjJAADUMku4ZNHtAAALSUlEQVR4nO2daVsaSRSFoaHZUcOSuHQkKiIi0Ykanbhkmf//owa6aOjm3lrvZctT79eZp9JH4Jyq013VuZzH4/F4PB6Px+PxeDwej8fj8Xg8Hg/C896vk+dNX8TqOHwMetVCpdX493DTl7IKri6Pos5+EBTy+bA+vPl6tekLYmb8cN0pBlMmCic06uWnj/1NXxUbZ3fRaTOYIRROqLXL3//Z9KVx8Lx32q0GC+YKY5Gtkw+bvkAasbeUgkCicPKTrLRqu+s7sbdk5QGF+d31nf7oIZp5i0bhbvpOxlv0CoXv/NgZ33ne63Yl8uQKd8d3Ds/3l73FVGHsO5Xt9p2ry5dIKU+jcOY7n7bUdybeco16i5XCWGT56ef2+c7ZN6m32Cqc0Ng233m+UHmLg8L8VvnO4Lyo9hY3hTPfGWxa3tW93ltcFeZnvvO+OXn90S0+b2FTGIssH//8vBF9xt6S5Zelwnw8qVu/7zxf9Iy9JUNv3LKXGPvO7zX6zuC8aeMtaZoPuS81F4lT36mvx3fsvSXzEb7lPjh9iDOR+VX7Tuwt+67ygqD4MhnkpuEqceW+M/UWW+vM0h1NhvnYdleYX6HvfHD1lhSlTjxUPSRJnPrOkNt3CN6SpvMYj/apTlQ4+bbWWvUDNt95J3lLmkisGD6XyQrzfL7Tv6R5S5rqxWzQkwqHxHhSR/Wd8SvVW9JEyfL9kOVDjJn4zhdCiTW4pnpLmknaJzimPk6t7P6D7EeMAoPewv7cUx9jSPii9lgMRhCnfQIl9QFld4G5I74fYdAdpwYmpn6G8Iag8Bvf77BUzYxMTv0FtR8EhXtV/aUb0rnPjMyQ+gmVA4LC+w6XwFKUtXSe1I+pfyIoHJ9yKazuLQ3Nlfr5fPsjQeFzj0thtDy/4kv9FmUS/s6lsPkKxmZL/RZpcsoV+T34EA1b6pdJdwB41hRB8QgZmyn1wzZFYO6WJ/IzaZ/AlPqNY5LCO5ZALDXRwXlSv/adpPCcReFS2ifwpH79X5LCS47IL/VwL+BJ/fpXksKzLoNCkPYJLKnfphVvA45ABGmfwJL6LVohdcUQiM1v0uE5Un9IvOvPoDCSPzLLkfqU9e+UF3LPhqZ9Aj31wzxR4QN5DYymfQI99WtPRIUX1EAsFZXjt6mpX/lNVPhIDcTOpXJ8cuqT1r9TRsQ1cKmnHp+c+vWfRIVvxMivnmv+AWrqt6k3oQ6JkX+tSytq6reoT/oRa29F2icQU59SeAu6pDVwBKZUoDYipn6LKpBWexdvl4fr/wHrDFLqkwpvAan27p0tD3f/Byx2SKlPKrwFlNp7PwDDBb/gLIuy1icV3gJK7X0K0v6tV4D1JiX1yYFPqr2RtH9tFuD36vPQXSGp8BYQam+Y9u/XQSFfBhFJSH1y4JNq7whIOa9OFMLqiJD6tMJb4Bz51Tsw1mlpohCpcN1Tn1Z4C5qukQ/TftyNn6CFvx3n1A/rdIHOtTdM+3j2UEBbatfUJxbeAtfaG6b9YPqFnz4FPYRzOcfUJxbeAsfaG0n7uC+YKqycgP/mmPoVWuEtcKy9YdqLZUr8JDv0B8fUJxbeArfau9SV/KkK+IU5rvWJhbfArfZG1vbB/lxhA05O3VKfWHgL3GpvuLZ/E38psd8CTk7dUp9aeAtcPkMk7V+bKYXIoscp9YccAnOBQ+TDtE++CrM9M3By6pL6Ycii0KH2bsK0T0JnphC5r+mQ+uTCW+BQe/fewCjJvvWZQmS65ZD65MJbYF9777+AQcZJ5iQ7uxCft099hvXvFPva+3QEBpnPbhOFDfgFs099cuEtsK69S6dgjME8cua784agyrVPfYb17xTr2nu2rSLN4rc8V4hMTq1Tn1x4C6xr7wjU0P1onjhzheEQTE6tU59eeAtO7QJxvq1iQWr2vthDisyaLVM/pBfeAsvaG6Z9+l75QiFSV1umPkPhLbCrvVPbKuYXnvolp/YBIw+G2qU+Q+EtsKu9kbRP/4lSCpEFul3qMxTeAqvaG0n7q+vUf0/v5YaTU7vUZwp8y9obSfvMpKigvkKr1GcovAU2tfdsE2WGzGO4aYXI5NQq9ZkC3672RtJ+nJkTZU4cQCanNqnPFPg5q9obpv1S4ZpRiKx+bFIfzhlcMX/aG0n7wXUxTaGRpgw/BfPUJz7hnca89o7gFZ+/HKX57zjNDVwIm6c+S+EtMK69kbS3xzj1WQpvgXHtjaS9Pcapz1J4C0xr7yJMexdMn+ZjKbwFprV3F6a9C6apz1J4CwxrbyztXTBNfZbCW2BYeyNp74Zh6vMU3gKzzzDiCmDD1OcpvAVGtTeS9q4YpX7YYPv3DGtvJO1dMUp9psJbYFJ7I5so3TFJfabCW2BSe/c4T4wxSX229e8Ug9pbua3CHoO1fp1r/TvFoPZWbquwxyD12da/U/S199KRCWQMUp9v/Zszqb0lmyjd0ac+V+Et0B1ysnxkAh196nMGvr72xjZRVosY2TX+jAoSbbrUZyu8BbraG9lEedYrYRRCDKTN0KU+W+Et0NTeWNpL5kH46Z7YdmVN6rMV3gJN7Y0cmfAuMSdcIVYqaVKfNfB1tTeW9rLmQ3JCK1Zfq1OfrfAWqGtvLO1lNx1lp84jXqNOfdbA19Te2JEJY9ksSHbKLuI16tRnDfycuvbG0l663pIpxIozZerzFd4C+KKKxUeIpL3MZ+QKMa9RpT7bHe4ERe2Npb28YZWeBY05hyL1GQtvgaL2vka2PMg/cqlC5BEiVeozFt4C+YeCbaKU+ozqPG/4CJEq9RkLb4G89saOTLh1eYMHNkmRpz5j4S2Q1t5Y2st9RqUQvVkmTX3Gwlsgrb2xtFfdyVGcOo95jTT1GQtvgaz2LpWQ/1kRLSqFmNdIU5+z8BZIFGJHJih8Rv3mAMxrZKlPPdIEgtfe6JEJCp9RK8S8RpL6TE94p8GnYdiRCYfKUkf5riDMa/DUZy28BXjtDTdR6u4YK99vgXkNnvqshbcArb2bcFuF7mFNpULMa/DUJ55hhoHW3siDlmqf0b2jBPMaNPVZC28BVnsjmyg1PqNTiJYvWOozr3+nYLU33ESp8xmdQtRrsNTnXv/m0Nob2USpfzJF8yYdzGuw1OctvAWw9u5gj17oHgrXKESXfQcw9XkLbwGsvZsXewDt41O6tyHVTw4A30EkMhfeAqT2blYB2tvh2vc9VSAw85kLbwHT2d62b7SS/Bl4C2/BiOdFCSwKa2WeDU9LHD5EDGfuMihsDJ9W9aLLtxfaqVEsCsP2zSrf3jVqqla3a1AY1lcwX8vy2KM5Dk1hZch7xwmlf0GyHIrCWvn3et4TePhKsBx3hY3hl/W9Sff5yPn9LK4KV2wwkHHTclciTeEaDAZy72Y5TgrXYjCQ/p6L5TgorJVPNvMi0lzu3cFyrBWu1WAgE8uxPCzaUmHYWrPBQMYlO8uxfB9wbf0GA7GzHBuFldZGDAZiZTnmCmvlg+15w/r7N2PLMVXYGP7Y4OuqEYwtx0xh2DqWn8a/Kc4CI8sxURi2G2t/S7URl12DR/oNFNZb3Pfo+TiPtLaqVbhVBgO5uos0tqprhMs/2G9fMzO4VVuO+u5a63gtLxcncqbsqxQKw3Z+Ow0Gcnkqtxy5wnp7ew0GIrcc6dOX220wkKs7yUwOV9gof992g4FILAdTGO6GwUBQy4EKd8hgIJcdUJEDhbtlMBBgOUsKK2X+x0bWzLLlZE9v2UWDgQweekVUYdh62k2DgaTvyi3O3Gvf7K7BQEbVpfNLJwazktu4G+RxZjmFv8VgIJ/FXblCbDC//waDgcQPAhQmS6SV3YbfPBPLKaz7Ltm6GRX+NoPxeDwej8fj8Xg8Ho/Hsx7+B98oHUeYawuCAAAAAElFTkSuQmCC',
    tags: ['Angular JS', 'Angular 2', 'Angular 4', 'Angular 5'],
    questions: [
      {
        id: 4,
        question: 'Where can I buy beautiful and updated Angular 5 tempaltes?',
        likeCount: 1,
        dislikeCount: 0,
        answers: [
          {
            id: 7,
            answer:
              'Yes!!! It has lots of benefits such as: Faster rendering, Fewer asynchronous requests, Smaller Angular framework download size and more.',
            likeCount: 2,
            dislikeCount: 0,
          },
          {
            id: 8,
            answer: "No, It's just the same than JIT, there no benefit at all.",
            likeCount: 0,
            dislikeCount: 1,
          },
        ],
      },
      {
        id: 5,
        question: 'Internationalization (i18n) in Angular 5',
        likeCount: 0,
        dislikeCount: 1,
        answers: [],
      },
      {
        id: 6,
        question: 'Should I care about AOT?',
        likeCount: 2,
        dislikeCount: 0,
        answers: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Angular Cli',
    description:
      'Angular cli is a command line interface to scaffoid and duild angular apps using nodejs style modules.',
    imageURL:
      'https://lh3.googleusercontent.com/-xNnUwwHnnvs/W6QWPAFhfFI/AAAAAAAACE0/fTeHhz9kGSc1OQaGoY6rRHG7jI_sNlasACHMYCw/s1600/wytonlggolyooutrrnkysxpxgrujwplo.jpg',
    tags: ['Angular CLI', 'Testing'],
    questions: [],
  },
  {
    id: 3,
    name: 'Typescript',
    description:
      'Typescript is a typed superset of JavaScript that compiles to plain JavaScript.',
    imageURL:
      'data:image/png;base64,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',
    tags: ['Javascript', 'Webpack', 'Typescript 2.x'],
    questions: [],
  },
];
