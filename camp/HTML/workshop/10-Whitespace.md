Whitespace
===========

```html
<p>Some            Text</p>

<p>
  Some
  Text


  Also
</p>

<ul>
  <li>Some</li>
  <li>Text</li>
</li>
```

- Space at the beginning and end of the tag is ignored
- Multiple spaces are merged into 1 space
- New lines as content are merged into 1 space
- Spaces between block level elements (like `li`) have no effect (unless we style the elements as inline, and then it's like text)
