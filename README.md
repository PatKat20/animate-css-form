# Formulário animado com JS puro e CSS Animation
<div align="center">
  ![Animated Form](https://user-images.githubusercontent.com/100157955/157088571-3ec82d63-7e25-4848-9a56-d2e2fca5ede4.gif)
</div>

## Animation


8 propriedades:

- animation-name: animationname;
- animation-duration: 2s;
- animation-delay: 3s;
- animation-fill-mode: none;
- animation-play-state: running;
- animation-timing-function: ease;
- animation-direction: reverse;
- animation-iteration-count: infinite;

```css
@keyframes animationname {
  0% {

  }

  100%{

  }
}
```


podemos ter múltiplas animações no mesmo elemento

```css
.animate {
  animation: slide-top 2s, bounce 1s, fade 0.2s;
}
```
