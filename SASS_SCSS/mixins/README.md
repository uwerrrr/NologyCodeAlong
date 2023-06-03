# Mixins

## What is a mixin?

- Mixins are a way to reuse code
- We can define a set of rules and give it a name
- Some rulesets are repeated often

```css
.my-class {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.some-other-class {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

```scss
@mixin flex-column {
  display: flex;
  flex-direction: column;
}

.my-class {
  @include flex-column;
  justify-content: space-evenly;
}

.some-other-class {
  @include flex-column;
  justify-content: space-between;
}
```
