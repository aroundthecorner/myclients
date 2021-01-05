<svg xmlns="http://www.w3.org/2000/svg" width="78" height="20" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="Project age">
    <title>Project age</title>

    <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
        <stop offset="1" stop-opacity=".1" />
    </linearGradient>

    <clipPath id="r">
        <rect width="78" height="20" rx="3" fill="#fff" />
    </clipPath>

    <g clip-path="url(#r)">
        <rect width="78" height="20" fill="#555" />
        <rect width="78" height="20" fill="url(#s)" />
    </g>

    <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
        <text aria-hidden="true" x="385" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="470">{{ $projectAge }} days</text>
        <text x="385" y="140" transform="scale(.1)" fill="#fff" textLength="470">{{ $projectAge }} days</text>
    </g>
</svg>