# Masonry Grid CSS (2020)

- Pinterest style

## New CSS Grid Specification

CSS Grid Layout Module Level 3
[https://drafts.csswg.org/css-grid-3/](https://drafts.csswg.org/css-grid-3/)

<aside>
⚠️ Não use em produção, pois ainda está em fase de testes

</aside>

Use o Firefox Nightly 
[https://www.mozilla.org/pt-BR/firefox/channel/desktop/](https://www.mozilla.org/pt-BR/firefox/channel/desktop/)

## Bora Codar

- HTML
    
    ```html
    <div class="container">
    	<figure>
    		<img src="[https://assets.codepen.io/12005/windmill.jpg](https://assets.codepen.io/12005/windmill.jpg)" alt="A windmill" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/suspension-bridge.jpg](https://assets.codepen.io/12005/suspension-bridge.jpg)" alt="The Clifton Suspension Bridge" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/sunset.jpg](https://assets.codepen.io/12005/sunset.jpg)" alt="Sunset and boats" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/snowy.jpg](https://assets.codepen.io/12005/snowy.jpg)" alt="a river in the snow" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/bristol-balloons1.jpg](https://assets.codepen.io/12005/bristol-balloons1.jpg)" alt="a single checked balloon" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/dog-balloon.jpg](https://assets.codepen.io/12005/dog-balloon.jpg)" alt="a hot air balloon shaped like a dog" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/abq-balloons.jpg](https://assets.codepen.io/12005/abq-balloons.jpg)" alt="View from a hot air balloon of other balloons" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/disney-balloon.jpg](https://assets.codepen.io/12005/disney-balloon.jpg)" alt="a balloon fairground ride" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/bristol-harbor.jpg](https://assets.codepen.io/12005/bristol-harbor.jpg)" alt="sunrise over a harbor" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/bristol-balloons2.jpg](https://assets.codepen.io/12005/bristol-balloons2.jpg)" alt="three hot air balloons in a blue sky" />
    	</figure>
    	<figure>
    		<img src="[https://assets.codepen.io/12005/toronto.jpg](https://assets.codepen.io/12005/toronto.jpg)" alt="the Toronto light up sign at night" />
    	</figure>
    </div>
    ```
    

## Como fazer sem a nova feature

```css
body {
  background-color: #272527;
}

img {
  width: 100%;
  border-radius: 4px;
}

figure {
  margin: 0;
  display: flex;
  margin-bottom: 10px;
  break-inside: avoid;
}

.container {
  column-count: 5;
  column-gap: 10px;
}
```

---

## Como fazer com a nova feature

<aside>
⚠️ Somente funciona no Firefox Nightly

</aside>

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
}
```

### Possibilidades

Posicionamento no eixo

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr [box-start] 1fr 1fr [box-end] 1fr;
  grid-template-rows: masonry;
}

.positioned {
  grid-column: box-start / box-end;
  border: 5px solid white;
}
```

Landscape

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  gap: 10px;
}

.landscape {
  grid-column-end: span 2;
}
```

## Contribuição

Você poderá contribuir para o desenvolvimento dessa feature

[https://github.com/w3c/csswg-drafts/issues/](https://github.com/w3c/csswg-drafts/issues/)

## Code Reference

[https://drafts.csswg.org/css-grid-3/](https://drafts.csswg.org/css-grid-3/)

[https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)