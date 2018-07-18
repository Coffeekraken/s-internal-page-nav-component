# Component

Provide a simple way to create a nice internal page navigation that automaticaly activate the good link depending on the displayed section.

### Example
```html
	<s-internal-page-nav>
  <a href="my-cool-section-1" title="...">...</a>
  <a href="my-cool-section-2" title="...">...</a>
  <a href="my-cool-section-3" title="...">...</a>
</s-internal-page-nav>
<section id="my-cool-section-1">
  <!-- content... -->
</section>
<section id="my-cool-section-2">
  <!-- content... -->
</section>
<section id="my-cool-section-3">
  <!-- content... -->
</section>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **SWebComponent**




## Attributes

Here's the list of available attribute(s).

### activeYPercent

Specify the y "percentage" of the screen from which the items are considered as active
By default, it's the half of the screen, so 0.5

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **0.5**


### checkBottomBoundary

Specify if need to check the bottom boundary or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**