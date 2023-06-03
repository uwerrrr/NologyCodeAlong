# Media Queries

## What are media queries?

- Media queries are part of CSS
- We can do them in CSS

```css
.gallery {
  display: grid;
}
/* on a phone we want 1 row and full size images with a small gap */

@media screen and (max-width: 576px) {
  button {
    font-size: 18px;
  }
  .gallery {
    grid-template-columns: 1fr;
    gap: 0.25em;
    justify-content: center;
  }
  .gallery img {
    width: 90vw;
  }
}

@media screen and (min-width: 577px) and (max-width: 820px) {
  button {
    font-size: 25px;
  }
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
    justify-content: center;
  }
  .gallery img {
    width: 45vw;
  }
}

@media screen and (min-width: 821px) and (max-width: 1080px) {
  button {
    font-size: 30px;
  }
  .gallery {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5em;
    justify-content: center;
  }
  .gallery img {
    width: 30vw;
  }
}

@media screen and (min-width: 1081px) and (max-width: 2560px) {
  button {
    font-size: 40px;
  }
  .gallery {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    justify-content: center;
  }
  .gallery img {
    width: 22vw;
  }
}
```

But the problem is they can be confusing to work with and it's hard to see where styles change
Using mixins we get the much more human readable

```scss
.gallery {
  display: grid;
  @include mixins.phone {
    grid-template-columns: 1fr;
    img {
      width: 90vw;
    }
  }
  @include mixins.tablet {
    grid-template-columns: 1fr 1fr;
    img {
      width: 45vw;
    }
  }

  @include mixins.landscape-tablet {
    grid-template-columns: 1fr 1fr 1fr;
    img {
      width: 30vw;
    }
  }
  @include mixins.laptop {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    img {
      width: 22vw;
    }
  }
  @include mixins.desktop {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    img {
      width: 15vw;
    }
  }
}

button {
  @include mixins.phone {
    font-size: 18px;
  }
  @include mixins.tablet {
    font-size: 22px;
  }
  @include mixins.landscape-tablet {
    font-size: 30px;
  }
  @include mixins.laptop {
    font-size: 40px;
  }

  @include mixins.desktop {
    font-size: 50px;
  }
}
```
