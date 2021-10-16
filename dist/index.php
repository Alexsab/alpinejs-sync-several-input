<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

<div x-data="{ open: false }">
	<button @click="open = ! open">Expand</button>

	<span x-show="open">
		Content...
	</span>
</div>

	<script src="//unpkg.com/alpinejs" defer></script>
	<script src="app.js"></script>
</body>
</html>