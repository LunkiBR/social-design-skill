// LIGA_SOCIAL — motor de montagem de posts da Liga de IA da UFSCar: carrossel de feed 4:5 (1080x1350) e stories 9:16 (1080x1920).
// Fonte versionada deste arquivo; a cópia executável vive no nó 'lib/LIGA_SOCIAL' da página Sistema — Social (721:2).
// O plano está descrito em carrossel-4x5/FORMAT.md e stories-9x16/FORMAT.md. Retorna IDs, palavras por slide e QA.
const LIGA_SOCIAL = (() => {
  const CFG = { collection: 'Liga / Social', modes: { azul100: '721:1', azul200: '753:2', azul300: '753:1', azul500: '753:0', azul600: '746:1', azul800: '721:0', azul900: '746:2', powder: '746:0' }, marcas: { liga: '721:67', news: '723:2' }, page: 'Produção — Social' };
  const ICONS = {"arrow-down":"<path d=\"M12 5v14\"/><path d=\"m19 12-7 7-7-7\"/>","arrow-right":"<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>","book-open":"<path d=\"M12 5v16\"/><path d=\"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z\"/>","bookmark":"<path d=\"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z\"/>","bot":"<path d=\"M12 8V4H8\"/><rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M2 14h2\"/><path d=\"M20 14h2\"/><path d=\"M15 13v2\"/><path d=\"M9 13v2\"/>","brain":"<path d=\"M12 18V5\"/><path d=\"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4\"/><path d=\"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5\"/><path d=\"M17.997 5.125a4 4 0 0 1 2.526 5.77\"/><path d=\"M18 18a4 4 0 0 0 2-7.464\"/><path d=\"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517\"/><path d=\"M6 18a4 4 0 0 1-2-7.464\"/><path d=\"M6.003 5.125a4 4 0 0 0-2.526 5.77\"/>","briefcase":"<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/>","building-2":"<path d=\"M10 12h4\"/><path d=\"M10 8h4\"/><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"/><path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\"/><path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\"/>","calculator":"<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\"/><line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\"/><path d=\"M16 10h.01\"/><path d=\"M12 10h.01\"/><path d=\"M8 10h.01\"/><path d=\"M12 14h.01\"/><path d=\"M8 14h.01\"/><path d=\"M12 18h.01\"/><path d=\"M8 18h.01\"/>","calendar":"<path d=\"M8 2v3\"/><path d=\"M16 2v3\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18\"/>","chart-column":"<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M18 17V9\"/><path d=\"M13 17V5\"/><path d=\"M8 17v-3\"/>","check":"<path d=\"M20 6 9 17l-5-5\"/>","circle-check":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 9-5.5 5.5L8 12\"/>","circle-help":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/>","circle-x":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9-6 6\"/><path d=\"m9 9 6 6\"/>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/>","cloud":"<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"/>","code":"<path d=\"m16 18 6-6-6-6\"/><path d=\"m8 6-6 6 6 6\"/>","cpu":"<path d=\"M12 20v2\"/><path d=\"M12 2v2\"/><path d=\"M17 20v2\"/><path d=\"M17 2v2\"/><path d=\"M2 12h2\"/><path d=\"M2 17h2\"/><path d=\"M2 7h2\"/><path d=\"M20 12h2\"/><path d=\"M20 17h2\"/><path d=\"M20 7h2\"/><path d=\"M7 20v2\"/><path d=\"M7 2v2\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"1\"/>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5V19A9 3 0 0 0 21 19V5\"/><path d=\"M3 12A9 3 0 0 0 21 12\"/>","dollar-sign":"<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/>","eye":"<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","file-text":"<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/>","flask-conical":"<path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\"/><path d=\"M6.453 15h11.094\"/><path d=\"M8.5 2h7\"/>","gauge":"<path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/>","git-branch":"<path d=\"M15 6a9 9 0 0 0-9 9V3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/><path d=\"M2 12h20\"/>","graduation-cap":"<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"/><path d=\"M22 10v6\"/><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"/>","hand-coins":"<path d=\"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17\"/><path d=\"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"/><path d=\"m2 16 6 6\"/><circle cx=\"16\" cy=\"9\" r=\"2.9\"/><circle cx=\"6\" cy=\"5\" r=\"3\"/>","hand-helping":"<path d=\"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14\"/><path d=\"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"/><path d=\"m2 13 6 6\"/>","handshake":"<path d=\"m11 17 2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3 1 11h-2\"/><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"/><path d=\"M3 4h8\"/>","heart":"<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"/>","history":"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><path d=\"M12 7v5l4 2\"/>","image":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/>","layers":"<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"/>","lightbulb":"<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\"/><path d=\"M9 18h6\"/><path d=\"M10 22h4\"/>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>","list-checks":"<path d=\"M13 5h8\"/><path d=\"M13 12h8\"/><path d=\"M13 19h8\"/><path d=\"m3 17 2 2 4-4\"/><path d=\"m3 7 2 2 4-4\"/>","lock":"<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>","mail":"<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/>","map-pin":"<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>","medal":"<path d=\"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15\"/><path d=\"M11 12 5.12 2.2\"/><path d=\"m13 12 5.88-9.8\"/><path d=\"M8 7h8\"/><circle cx=\"12\" cy=\"17\" r=\"5\"/><path d=\"M12 18v-2h-.5\"/>","megaphone":"<path d=\"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\"/><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\"/><path d=\"M8 6v8\"/>","message-circle":"<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/>","mic":"<path d=\"M12 19v3\"/><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"13\" rx=\"3\"/>","newspaper":"<path d=\"M15 18h-5\"/><path d=\"M18 14h-8\"/><path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2\"/><rect width=\"8\" height=\"4\" x=\"10\" y=\"6\" rx=\"1\"/>","party-popper":"<path d=\"M5.8 11.3 2 22l10.7-3.79\"/><path d=\"M4 3h.01\"/><path d=\"M22 8h.01\"/><path d=\"M15 2h.01\"/><path d=\"M22 20h.01\"/><path d=\"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10\"/><path d=\"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17\"/><path d=\"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7\"/><path d=\"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z\"/>","puzzle":"<path d=\"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z\"/>","quote":"<path d=\"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\"/><path d=\"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\"/>","repeat":"<path d=\"m17 2 4 4-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/><path d=\"m7 22-4-4 4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/>","rocket":"<path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\"/><path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\"/>","scale":"<path d=\"M12 3v18\"/><path d=\"m19 8 3 8a5 5 0 0 1-6 0zV7\"/><path d=\"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1\"/><path d=\"m5 8 3 8a5 5 0 0 1-6 0zV7\"/><path d=\"M7 21h10\"/>","school":"<path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"/><path d=\"M18 4.933V21\"/><path d=\"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6\"/><path d=\"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11\"/><path d=\"M6 4.933V21\"/><circle cx=\"12\" cy=\"9\" r=\"2\"/>","search":"<path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/>","settings":"<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"/><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"/>","shield-check":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>","smartphone":"<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12 18h.01\"/>","sparkles":"<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"/><path d=\"M20 2v4\"/><path d=\"M22 4h-4\"/><circle cx=\"4\" cy=\"20\" r=\"2\"/>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>","terminal":"<path d=\"M12 19h8\"/><path d=\"m4 17 6-6-6-6\"/>","trending-down":"<path d=\"M16 17h6v-6\"/><path d=\"m22 17-8.5-8.5-5 5L2 7\"/>","trending-up":"<path d=\"M16 7h6v6\"/><path d=\"m22 7-8.5 8.5-5-5L2 17\"/>","triangle-alert":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>","trophy":"<path d=\"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2\"/><path d=\"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2\"/><path d=\"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3\"/><path d=\"M4 22h16\"/><path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\"/><path d=\"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3\"/>","user":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>","users":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/>","wand-sparkles":"<path d=\"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72\"/><path d=\"m14 7 3 3\"/><path d=\"M5 6v4\"/><path d=\"M19 14v4\"/><path d=\"M10 2v2\"/><path d=\"M7 8H3\"/><path d=\"M21 16h-4\"/><path d=\"M11 3H9\"/>","wrench":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\"/>","x":"<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>","zap":"<path d=\"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z\"/>"};
  const GEO = {
    feed: { W: 1080, H: 1350, X: 96, CW: 888, HEAD: 96, CT: 200, CB: 1142, FOOT: 1206, SAFE: [96, 96, 984, 1254], gap: 24, block: 64, minFont: 28 },
    story: { W: 1080, H: 1920, X: 96, CW: 888, HEAD: 286, CT: 384, CB: 1444, FOOT: 1492, SAFE: [96, 270, 984, 1540], gap: 32, block: 64, minFont: 32 }
  };
  const SLOTS = { enquete: [144, 1000, 792, 336], quiz: [144, 880, 792, 520], slider: [144, 1040, 792, 200], caixa: [144, 1000, 792, 360], contagem: [144, 1040, 792, 240], link: [240, 1336, 600, 120] };
  const STY = {
    feed: { hook: 'Social/Hook', hookLongo: 'Social/Hook longo', numero: 'Social/Número', titulo: 'Social/Título', tituloC: 'Social/Título compacto', statement: 'Social/Statement', citacao: 'Social/Citação', lead: 'Social/Lead', destaque: 'Social/Destaque', corpo: 'Social/Corpo', cardT: 'Social/Card título', cardX: 'Social/Card texto', cta: 'Social/CTA', eyebrow: 'Social/Eyebrow', rodape: 'Social/Rodapé', nota: 'Social/Nota', chip: 'Social/Chip', valor: 'Social/Valor' },
    story: { hook: 'Social Story/Hook', hookLongo: 'Social Story/Título', numero: 'Social Story/Número', titulo: 'Social Story/Título', tituloC: 'Social Story/Título compacto', statement: 'Social Story/Statement', citacao: 'Social Story/Citação', lead: 'Social Story/Lead', destaque: 'Social Story/Lead', corpo: 'Social Story/Corpo', cardT: 'Social Story/Card título', cardX: 'Social Story/Card texto', cta: 'Social Story/CTA', eyebrow: 'Social Story/Eyebrow', rodape: 'Social Story/Nota', nota: 'Social Story/Nota', chip: 'Social Story/Card texto', valor: 'Social Story/Card título' }
  };
  // só tons da paleta da Liga: azul 100 a 900 (sem 400 e 700) e Powder. Gradientes usam tons vizinhos.
  const GRAD = { azul100: ['#f4f6fd', '#eaeffc'], azul200: ['#eaeffc', '#eaeffc'], azul300: ['#8b9fe8', '#8b9fe8'], azul500: ['#4b63ce', '#1e2f8a'], azul600: ['#1e2f8a', '#0c1854'], azul800: ['#0c1854', '#1e2f8a'], azul900: ['#060a1b', '#0c1854'], powder: ['#c4e8ed', '#c4e8ed'] };
  const ALIAS = { claro: 'azul100', navy: 'azul800', escuro: 'azul800', tinta: 'azul900', ink: 'azul900' };
  // fundo do respiro: o oposto do fundo do post
  const OPOSTO = { azul800: 'powder', azul900: 'powder', azul600: 'azul100', azul500: 'azul100', azul300: 'azul900', azul200: 'azul800', azul100: 'azul600', powder: 'azul800' };
  const FORMAS = ['aro', 'circulos', 'pontos', 'faixa', 'quadrados', 'abertura', 'meio'];
  const AUTO = [['aro', 'dd'], ['circulos', 'de'], ['pontos', 'ed'], ['faixa', 'dd'], ['quadrados', 'de'], ['meio', 'dd'], ['abertura', 'ed']];
  // limites de palavras por slide (sem rodapé e cabeçalho): [alvo, teto]
  const WORDS = { feed: { capa: [18, 24], miolo: [45, 60], leve: [15, 20], citacao: [26, 34], fechamento: [40, 50] }, story: { capa: [12, 16], miolo: [18, 25], leve: [12, 15], citacao: [20, 28], fechamento: [18, 25] } };
  const LEVES = ['statement', 'respiro', 'numero', 'pergunta', 'citacao'];

  let FMT = 'feed', G = GEO.feed, post, wrapper, col, slides = [], total = 0, LONG = new Set(), formaN = 0;
  const V = {}, S = {};
  const hex = h => { const n = parseInt(h.slice(1), 16); return { r: (n >> 16 & 255) / 255, g: (n >> 8 & 255) / 255, b: (n & 255) / 255 }; };

  async function init() {
    figma.skipInvisibleInstanceChildren = false;
    col = (await figma.variables.getLocalVariableCollectionsAsync()).find(c => c.name === CFG.collection);
    if (!col) throw new Error('coleção de variáveis ausente: ' + CFG.collection);
    for (const id of col.variableIds) { const v = await figma.variables.getVariableByIdAsync(id); V[v.name] = v; }
    const fonts = new Map();
    for (const s of await figma.getLocalTextStylesAsync()) if (s.name.startsWith('Social')) { S[s.name] = s; fonts.set(s.fontName.style, s.fontName); }
    for (const st of ['Bold', 'Medium', 'Regular']) fonts.set(st, { family: 'Clash Display', style: st });
    await Promise.all([...fonts.values()].map(f => figma.loadFontAsync(f)));
  }
  // paint ligado a variável sempre sai com opacidade 1; transparência vai no nó (node.opacity) ou no alfa da variável
  const paint = name => figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', V[name]);
  function al(dir, name, props = {}) { const f = figma.createAutoLayout(dir, { name, ...props }); f.fills = []; return f; }
  function fixedW(f, w) { f.resize(w, Math.max(1, f.height)); if (f.layoutMode === 'VERTICAL') { f.counterAxisSizingMode = 'FIXED'; f.primaryAxisSizingMode = 'AUTO'; } else { f.primaryAxisSizingMode = 'FIXED'; f.counterAxisSizingMode = 'AUTO'; } return f; }
  const st = role => S[STY[FMT][role]];
  const words = s => String(s || '').replace(/[*=]/g, '').split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length;

  // texto com marcação: **forte** sobe um peso; ==acento== pinta com o acento do modo; \n quebra linha
  async function text(str, role, color, width, opts = {}) {
    const style = st(role); if (!style) throw new Error('estilo ausente: ' + role);
    const t = figma.createText(); await t.setTextStyleIdAsync(style.id);
    const ranges = []; let plain = ''; const re = /(\*\*([^*]+)\*\*|==([^=]+)==)/g; let last = 0, m; const s0 = String(str);
    while ((m = re.exec(s0))) { plain += s0.slice(last, m.index); const inner = m[2] ?? m[3]; ranges.push([plain.length, plain.length + inner.length, m[2] != null ? 'b' : 'a']); plain += inner; last = re.lastIndex; }
    plain += s0.slice(last);
    if (width && opts.nbsp !== false) plain = plain.split('\n').map(l => { const m2 = l.match(/(\S+) (\S+)$/); return m2 && l.split(' ').length > 3 && (m2[1] + m2[2]).length <= 16 ? l.replace(/ (\S+)$/, String.fromCharCode(160) + '$1') : l; }).join('\n');
    t.characters = plain; t.fills = [paint(color)];
    const up = { Regular: 'Medium', Medium: 'Bold', Bold: 'Bold' };
    for (const [a, b, k] of ranges) { if (k === 'b') t.setRangeFontName(a, b, { family: 'Clash Display', style: up[style.fontName.style] }); else t.setRangeFills(a, b, [paint('acento')]); }
    if (opts.align) t.textAlignHorizontal = opts.align;
    if (width) { t.resize(width, t.height); t.textAutoResize = 'HEIGHT'; } else t.textAutoResize = 'WIDTH_AND_HEIGHT';
    if (width) { const lw = plain.split(/[ \n]+/).reduce((a, w) => w.length > a.length ? w : a, ''); if (lw.length > 5) { const pr = figma.createText(); await pr.setTextStyleIdAsync(style.id); pr.characters = lw; if (pr.width > width) LONG.add(t.id); pr.remove(); } }
    t.name = opts.name || role; return t;
  }
  function icon(name, size, color) {
    const inner = ICONS[name]; if (!inner) throw new Error('ícone desconhecido: ' + name + ' (veja a lista em FORMAT.md)');
    const n = figma.createNodeFromSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`);
    n.rescale(size / 24); n.name = 'icon/' + name; n.fills = [];
    for (const v of n.findAll(x => 'strokes' in x)) { v.strokes = [paint(color)]; v.strokeWeight = 2 * size / 24; v.fills = []; }
    return n;
  }
  function badge(size, fill, child, name, opaque) {
    const b = al('HORIZONTAL', name || 'Ícone', { primaryAxisAlignItems: 'CENTER', counterAxisAlignItems: 'CENTER' });
    b.resize(size, size); b.primaryAxisSizingMode = 'FIXED'; b.counterAxisSizingMode = 'FIXED'; b.cornerRadius = size / 2; b.fills = opaque ? [paint('fundo/topo'), paint(fill)] : [paint(fill)];
    if (child) b.appendChild(child); return b;
  }
  function card(kind, pad) {
    const f = al('VERTICAL', 'Card', { itemSpacing: 8, paddingTop: pad, paddingBottom: pad, paddingLeft: pad, paddingRight: pad }); f.cornerRadius = 32;
    f.fills = [paint(kind === 'destaque' ? 'destaque/fundo' : 'card/fundo')]; f.strokes = [paint(kind === 'destaque' ? 'destaque/borda' : 'card/borda')]; f.strokeWeight = 2; return f;
  }
  async function pill(label, role = 'cta') {
    const p = al('HORIZONTAL', 'CTA', { paddingTop: FMT === 'feed' ? 24 : 28, paddingBottom: FMT === 'feed' ? 24 : 28, paddingLeft: 40, paddingRight: 40, counterAxisAlignItems: 'CENTER' });
    p.cornerRadius = 999; p.fills = [paint('cta/fundo')]; p.appendChild(await text(label, role, 'cta/texto', null, { nbsp: false, name: 'CTA texto' })); return p;
  }
  async function chip(label, color = 'acento', iconName) {
    const c = al('HORIZONTAL', 'Chip', { itemSpacing: 12, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 24, counterAxisAlignItems: 'CENTER' }); c.cornerRadius = 999; c.fills = [paint('icone/fundo')];
    if (iconName) c.appendChild(icon(iconName, FMT === 'feed' ? 28 : 32, color));
    c.appendChild(await text(label, 'eyebrow', color, null, { nbsp: false, name: 'Chip texto' })); return c;
  }
  async function image(spec, w, h, opts = {}) {
    const r = figma.createRectangle(); r.resize(w, h); r.name = 'Imagem'; r.cornerRadius = opts.radius ?? 32;
    const mode = spec && spec.ajuste === 'fit' ? 'FIT' : 'FILL';
    if (spec && spec.hash) r.fills = [{ type: 'IMAGE', imageHash: spec.hash, scaleMode: mode }];
    else if (spec && spec.node) {
      const src = await figma.getNodeByIdAsync(spec.node); if (!src) throw new Error('imagem: nó ausente ' + spec.node);
      const p = 'fills' in src && Array.isArray(src.fills) ? src.fills.find(x => x.type === 'IMAGE') : null;
      if (p) r.fills = [{ ...p, scaleMode: mode }];
      else { // vetor, grupo ou frame sem imagem: clona e encaixa
        const box = figma.createFrame(); box.name = 'Imagem'; box.resize(w, h); box.fills = []; box.clipsContent = true; box.cornerRadius = opts.radius ?? 32;
        const c = src.clone(); box.appendChild(c); c.rotation = 0; const k = Math.min(w / c.width, h / c.height); c.rescale(k); c.x = (w - c.width) / 2; c.y = (h - c.height) / 2; r.remove(); return credit(box, spec, w, h);
      }
    } else { r.fills = [paint('card/fundo')]; r.strokes = [paint('card/borda')]; r.strokeWeight = 2; r.dashPattern = [16, 12]; r.name = 'Imagem pendente: ' + ((spec && spec.key) || 'sem-chave'); }
    if (spec && spec.borda !== false && r.fills[0] && r.fills[0].type === 'IMAGE' && mode === 'FILL') { r.strokes = [paint('card/borda')]; r.strokeWeight = 2; }
    return credit(r, spec, w, h);
  }
  // crédito de imagem de terceiros: selo escuro no canto inferior esquerdo da imagem
  async function credit(node, spec, w, h) {
    if (!spec || !spec.credito) return node;
    const f = figma.createFrame(); f.name = 'Imagem com crédito'; f.resize(w, h); f.fills = []; f.clipsContent = true; f.cornerRadius = node.cornerRadius || 0;
    f.appendChild(node); node.x = 0; node.y = 0;
    const c = al('HORIZONTAL', 'Crédito', { paddingTop: 6, paddingBottom: 6, paddingLeft: 16, paddingRight: 16, counterAxisAlignItems: 'CENTER' }); c.cornerRadius = 999;
    c.fills = [{ type: 'SOLID', color: { r: 0.02, g: 0.04, b: 0.13 }, opacity: 0.66 }];
    const t = await text((spec.creditoPrefixo ?? 'Imagem: ') + spec.credito, 'nota', 'texto/titulo', null, { nbsp: false, name: 'Crédito texto' }); t.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    c.appendChild(t); f.appendChild(c); c.x = 16; c.y = h - c.height - 16;
    return f;
  }

  // ---------- formas decorativas (camada 'motivo/*', atrás do conteúdo, sempre translúcidas) ----------
  function rotate(n, cx, cy, deg) { const a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a); n.relativeTransform = [[c, s, cx - c * n.width / 2 - s * n.height / 2], [-s, c, cy + s * n.width / 2 - c * n.height / 2]]; }
  async function motivo(f, kind, pos, soft) {
    if (!FORMAS.includes(kind)) throw new Error('forma desconhecida: ' + kind + ' (use ' + FORMAS.join(', ') + ')');
    const W = G.W, H = G.H, k = FMT === 'story' ? 1.15 : 1;
    const [cx, cy, dx, dy] = { dd: [W, H, -1, -1], de: [W, 0, -1, 1], ed: [0, H, 1, -1], ee: [0, 0, 1, 1] }[pos] || [W, H, -1, -1];
    const g = figma.createFrame(); g.name = 'motivo/' + kind; g.resize(W, H); g.fills = []; g.clipsContent = false; f.appendChild(g); g.x = 0; g.y = 0; f.insertChild(0, g);
    const M = soft ? 0.7 : 1;
    const fill = (n, op) => { n.fills = [paint('acento')]; n.opacity = op * M; g.appendChild(n); return n; };
    const line = (n, sw, op) => { n.fills = []; n.strokes = [paint('acento')]; n.strokeWeight = sw; n.opacity = op * M; g.appendChild(n); return n; };
    const circ = (d, x, y) => { const e = figma.createEllipse(); e.resize(d, d); e.x = x - d / 2; e.y = y - d / 2; return e; };
    if (kind === 'aro') { line(circ(1180 * k, cx, cy), 130 * k, 0.12); line(circ(700 * k, cx, cy), 44 * k, 0.12); }
    if (kind === 'circulos') { fill(circ(860 * k, cx, cy), 0.10); fill(circ(380 * k, cx + dx * 520 * k, cy + dy * 300 * k), 0.16); line(circ(150 * k, cx + dx * 250 * k, cy + dy * 820 * k), 14, 0.24); }
    if (kind === 'pontos') {
      const n = 9, sp = 60, x0 = dx > 0 ? 72 : W - 72 - (n - 1) * sp, y0 = dy > 0 ? (FMT === 'story' ? 330 : 200) : H - (FMT === 'story' ? 400 : 190) - (n - 1) * sp;
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) fill(circ(10, x0 + i * sp, y0 + j * sp), 0.32);
    }
    if (kind === 'faixa') {
      const ang = dx * dy > 0 ? 28 : -28;
      for (const [w, h, ox, oy, op] of [[1800, 240, 140, 190, 0.10], [1800, 84, 330, 440, 0.16]]) { const r = figma.createRectangle(); r.resize(w, h); r.cornerRadius = h / 2; fill(r, op); rotate(r, cx + dx * ox * k, cy + dy * oy * k, ang); }
    }
    if (kind === 'quadrados') {
      const a = figma.createRectangle(); a.resize(520 * k, 520 * k); a.cornerRadius = 32; fill(a, 0.10); rotate(a, cx + dx * 60 * k, cy + dy * 60 * k, 20);
      const b2 = figma.createRectangle(); b2.resize(280 * k, 280 * k); b2.cornerRadius = 32; line(b2, 8, 0.28); rotate(b2, cx + dx * 300 * k, cy + dy * 250 * k, 20);
    }
    if (kind === 'abertura') {
      const logo = (await figma.getNodeByIdAsync(CFG.marcas.news)).findOne(n => n.name === 'Logo').clone(); logo.rescale(760 * k / logo.width); logo.opacity = 0.10; logo.name = 'abertura';
      g.appendChild(logo); logo.x = dx < 0 ? W - logo.width * 0.7 : -logo.width * 0.3; logo.y = dy < 0 ? H - logo.height * 0.7 : -logo.height * 0.3;
    }
    if (kind === 'meio') {
      const top = dy < 0; const y0 = top ? H - 440 * k : 440 * k;
      fill(circ(1700 * k, W / 2, top ? y0 + 850 * k : y0 - 850 * k), 0.10); fill(circ(1160 * k, W / 2, top ? H - 260 * k + 580 * k : 260 * k - 580 * k), 0.08);
    }
    return g;
  }
  // aspas grandes para falas e citações: o glifo é recortado para ocupar só a altura visível
  async function aspasGrandes(size, name = 'bloco/aspas') {
    const t = await text('“', 'hook', 'acento', null, { nbsp: false, name: 'aspas' }); t.fontSize = size; t.lineHeight = { unit: 'PIXELS', value: size };
    const box = figma.createFrame(); box.name = name; box.fills = []; box.clipsContent = true; box.resize(Math.round(size * 0.66), Math.round(size * 0.40));
    box.appendChild(t); t.x = -Math.round(size * 0.05); t.y = -Math.round(size * 0.04); return box;
  }
  function iniciais(nome) { return String(nome).replace(/[^\p{L} ]/gu, '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join(''); }
  async function autor(b, size = 96) {
    const a = al('HORIZONTAL', 'Atribuição', { itemSpacing: 24, counterAxisAlignItems: 'CENTER' });
    if (b.foto) a.appendChild(await image(b.foto, size, size, { radius: size / 2 }));
    else a.appendChild(badge(size, 'icone/fundo', await text(iniciais(b.autor) || '·', 'cardT', 'acento', null, { nbsp: false }), 'Avatar'));
    const tx = al('VERTICAL', 'Nome', { itemSpacing: 4 }); tx.appendChild(await text(b.autor, 'cardT', 'texto/titulo', null, { nbsp: false })); if (b.cargo) tx.appendChild(await text(b.cargo, 'cardX', 'texto/apoio', null, { nbsp: false })); a.appendChild(tx); return a;
  }

  // ---------- moldura ----------
  function modeOf(b, def) {
    let m = String(b.modo || def || post.modo || 'azul800').toLowerCase().replace(/[\s_/-]/g, ''); m = ALIAS[m] || m;
    if (!CFG.modes[m]) throw new Error('modo desconhecido: ' + (b.modo || post.modo) + ' (use azul100, azul200, azul300, azul500, azul600, azul800, azul900 ou powder)');
    return m;
  }
  async function slide(kind, b, o = {}) {
    const i = slides.length + 1; const f = figma.createFrame(); f.resize(G.W, G.H); f.clipsContent = true;
    f.name = `${String(i).padStart(2, '0')} — ${kind}`; wrapper.appendChild(f);
    let mode = o.force || modeOf(b, o.mode);
    if (o.alt && !b.modo && !o.force) mode = OPOSTO[modeOf({}, null)] || 'powder';
    f.setExplicitVariableModeForCollection(col, CFG.modes[mode]);
    const [a, z] = GRAD[mode];
    f.fills = a === z ? [{ type: 'SOLID', color: hex(a) }] : [{ type: 'GRADIENT_LINEAR', gradientTransform: [[0, 1, 0], [-1, 0, 1]], gradientStops: [{ position: 0, color: { ...hex(a), a: 1 } }, { position: 1, color: { ...hex(z), a: 1 } }] }];
    const rec = { frame: f, kind, t: b.t, mode, y: G.CT, bottom: G.CB, center: !!o.center, slot: null };
    let forma = b.forma, pos = b.pos;
    if (forma === undefined && o.auto && post.formas !== false) { const au = AUTO[formaN++ % AUTO.length]; forma = au[0]; pos = pos || au[1]; }
    if (forma && forma !== 'nenhuma') await motivo(f, forma, pos || 'dd', !o.center);
    if (b.sticker && FMT === 'story') {
      const s = SLOTS[b.sticker]; if (!s) throw new Error('sticker desconhecido: ' + b.sticker);
      const slot = figma.createFrame(); slot.name = 'slot/' + b.sticker; slot.resize(s[2], s[3]); slot.x = s[0]; slot.y = s[1]; slot.fills = []; slot.strokes = [paint('acento')]; slot.dashPattern = [12, 12]; slot.strokeWeight = 2; slot.cornerRadius = 32; f.appendChild(slot); slot.visible = false;
      rec.slot = s; rec.bottom = s[1] - 48;
    }
    if (!o.noHeader) await header(rec, b);
    slides.push(rec); return rec;
  }
  async function header(rec, b) {
    const comp = await figma.getNodeByIdAsync(post.serie === 'news' ? CFG.marcas.news : CFG.marcas.liga);
    const inst = comp.createInstance(); rec.frame.appendChild(inst); inst.name = 'Cabeçalho — marca';
    if (post.serie === 'news') { const p = {}; for (const k of Object.keys(comp.componentPropertyDefinitions)) p[k] = k.startsWith('Tópico') ? (post.topico || ' ') : !!post.topico; inst.setProperties(p); }
    inst.rescale(FMT === 'story' ? 1.8 : 1.6);
    inst.x = G.X; inst.y = G.HEAD;
    if (b.data) { const d = await text(b.data, 'rodape', 'texto/apoio', null, { nbsp: false, name: 'Cabeçalho — data' }); rec.frame.appendChild(d); d.x = G.X + G.CW - d.width; d.y = G.HEAD + (inst.height - d.height) / 2; }
  }
  async function footer(rec, i, n) {
    if (FMT !== 'feed') return;
    const f = al('HORIZONTAL', 'Rodapé', { counterAxisAlignItems: 'CENTER', primaryAxisAlignItems: 'SPACE_BETWEEN' }); fixedW(f, G.CW);
    f.appendChild(await text(`${String(i).padStart(2, '0')} / ${String(n).padStart(2, '0')}`, 'rodape', 'texto/apoio', null, { nbsp: false, name: 'Rodapé — contador' }));
    if (i < n) {
      const p = al('HORIZONTAL', 'Rodapé — pista', { itemSpacing: 16, counterAxisAlignItems: 'CENTER' });
      p.appendChild(await text(rec.pista || 'Arraste', 'rodape', 'acento', null, { nbsp: false, name: 'Rodapé — pista texto' })); p.appendChild(icon('arrow-right', 40, 'acento')); f.appendChild(p);
    }
    rec.frame.appendChild(f); f.x = G.X; f.y = G.FOOT;
  }
  // empilha um bloco no fluxo do slide
  function put(rec, node, gapBefore, name) { rec.frame.appendChild(node); node.x = G.X; node.y = rec.y + (rec.used ? gapBefore : 0); rec.y = node.y + node.height; rec.used = true; node.name = 'bloco/' + (name || node.name); return node; }
  // centraliza verticalmente os blocos já empilhados (arquétipos de foco)
  function centerBlocks(rec, top = G.CT, bottom = rec.bottom) {
    const blocks = rec.frame.children.filter(n => n.name.startsWith('bloco/') && !n.name.startsWith('bloco/nota'));
    if (!blocks.length) return; const y0 = Math.min(...blocks.map(n => n.y)), y1 = Math.max(...blocks.map(n => n.y + n.height));
    const dy = Math.round(top + (bottom - top - (y1 - y0)) / 2 - y0); for (const n of blocks) n.y += dy;
  }
  async function nota(rec, str, name = 'nota') { if (!str) return; const t = await text(str, 'nota', 'texto/apoio', G.CW); rec.frame.appendChild(t); t.x = G.X; t.y = rec.bottom - t.height; t.name = 'bloco/' + name; rec.notaTop = t.y; return t; }
  async function head(rec, b, role = 'titulo') {
    if (b.eyebrow) put(rec, await text(b.eyebrow, 'eyebrow', 'acento', G.CW, { nbsp: false }), 0, 'eyebrow');
    if (b.titulo) put(rec, await text(b.titulo, role, 'texto/titulo', G.CW), b.eyebrow ? 16 : 0, 'titulo');
    if (b.corpo) put(rec, await text(b.corpo, 'corpo', 'texto/corpo', G.CW), G.gap, 'corpo');
  }

  // ---------- arquétipos ----------
  const LAY = {};
  LAY.capa = async (b) => {
    const v = b.variante || (b.imagem ? 'arte' : 'tipografica');
    const rec = await slide('Capa ' + v, b, { force: v === 'imagem' ? 'azul800' : null, auto: false }); rec.pista = b.pista; const f = rec.frame;
    const long = words(b.hook) > 5 || String(b.hook).replace(/[*=]/g, '').length > 26;
    const blk = al('VERTICAL', 'Capa — hook + apoio', { itemSpacing: FMT === 'feed' ? 32 : 40 }); fixedW(blk, G.CW);
    if (b.eyebrow) blk.appendChild(await text(b.eyebrow, 'eyebrow', 'acento', G.CW, { nbsp: false }));
    if (v === 'numero') blk.appendChild(await text(b.numero, 'numero', 'acento', null, { nbsp: false, name: 'Número' }));
    blk.appendChild(await text(b.hook, long ? 'hookLongo' : 'hook', 'texto/titulo', G.CW, { name: 'Hook' }));
    if (b.apoio) blk.appendChild(await text(b.apoio, 'corpo', 'texto/corpo', FMT === 'feed' ? 760 : G.CW, { name: 'Apoio' }));
    f.appendChild(blk); blk.x = G.X; blk.name = 'bloco/capa';
    if (v === 'tipografica' || v === 'numero') {
      blk.y = v === 'numero' ? G.CT : G.CT + (FMT === 'feed' ? 48 : 96);
      const logo = (await figma.getNodeByIdAsync(CFG.marcas.news)).findOne(n => n.name === 'Logo').clone(); f.appendChild(logo);
      logo.rescale((FMT === 'feed' ? 560 : 720) / logo.width); logo.opacity = 0.08; logo.name = 'motivo/marca'; logo.x = G.W - logo.width * 0.72; logo.y = G.H - logo.height * 0.78;
      f.insertChild(0, logo);
    } else if (v === 'imagem') {
      const img = await image({ ...b.imagem, borda: false }, G.W, G.H, { radius: 0 }); f.insertChild(0, img); img.x = 0; img.y = 0; img.name = 'motivo/imagem';
      if ('strokes' in img) img.strokes = [];
      const scrim = figma.createRectangle(); scrim.resize(G.W, G.H); scrim.name = 'motivo/scrim';
      blk.y = G.CB - blk.height; const t0 = Math.max(0.2, (blk.y - 320) / G.H), t1 = Math.min(1, blk.y / G.H); const nv = hex('#0c1854');
      // escurece o topo (marca legível sobre foto clara) e a base (hook com contraste ≥ 7:1)
      scrim.fills = [{ type: 'GRADIENT_LINEAR', gradientTransform: [[0, 1, 0], [-1, 0, 1]], gradientStops: [{ position: 0, color: { ...nv, a: 0.6 } }, { position: 0.16, color: { ...nv, a: 0 } }, { position: t0, color: { ...nv, a: 0 } }, { position: t1, color: { ...nv, a: 0.8 } }, { position: 1, color: { ...nv, a: 0.94 } }] }];
      f.insertChild(1, scrim);
      const cr = 'findOne' in img ? img.findOne(n => n.name === 'Crédito') : null;
      if (cr) { f.appendChild(cr); cr.x = G.X + G.CW - cr.width; cr.y = G.HEAD + (b.data ? 56 : 0); }
    } else { // arte: imagem ou recorte acima do hook, sem moldura
      blk.y = G.CB - blk.height;
      if (b.imagem) { const top = G.CT, h = blk.y - G.block - top; if (h > 160) { const img = await image({ ajuste: 'fit', borda: false, ...b.imagem }, G.CW, h, { radius: b.imagem.ajuste === 'fill' ? 32 : 0 }); f.appendChild(img); img.x = G.X; img.y = top; img.name = 'bloco/arte'; } }
    }
    if (v !== 'tipografica' && v !== 'numero') blk.y = G.CB - blk.height;
    return rec;
  };
  LAY.texto = async (b) => {
    const rec = await slide('Texto', b); await head(rec, b);
    if (b.nota) await nota(rec, b.nota);
    if (b.destaque) { const c = card('destaque', FMT === 'feed' ? 48 : 48); c.itemSpacing = 16; fixedW(c, G.CW); if (b.destaque.eyebrow) c.appendChild(await text(b.destaque.eyebrow, 'eyebrow', 'acento', G.CW - 96, { nbsp: false })); c.appendChild(await text(b.destaque.texto, 'destaque', 'texto/titulo', G.CW - 96)); put(rec, c, G.block, 'destaque'); }
    if (b.imagem) { const lim = (rec.notaTop ? rec.notaTop - 32 : rec.bottom); const top = rec.y + G.block; const ratio = b.imagem.ratio || 1.5; const h = Math.min(lim - top, Math.round(G.CW / ratio)); put(rec, await image(b.imagem, G.CW, Math.max(120, h)), G.block, 'imagem'); }
    else if (FMT === 'story') { rec.center = true; centerBlocks(rec, G.CT, rec.notaTop ? rec.notaTop - 32 : rec.bottom); }
    return rec;
  };
  LAY.statement = async (b, alt) => {
    const rec = await slide(alt ? 'Respiro' : 'Statement', b, { alt, center: true, auto: true });
    if (b.aspas) put(rec, await aspasGrandes(FMT === 'feed' ? 440 : 520), 24, 'aspas');
    if (b.eyebrow) put(rec, await text(b.eyebrow, 'eyebrow', 'acento', G.CW, { nbsp: false }), 0, 'eyebrow');
    put(rec, await text(b.texto, 'statement', 'texto/titulo', G.CW), 24, 'statement');
    if (b.apoio) put(rec, await text(b.apoio, 'corpo', 'texto/corpo', G.CW), 40, 'apoio');
    if (b.nota) await nota(rec, b.nota);
    centerBlocks(rec, G.CT, rec.notaTop ? rec.notaTop - 32 : rec.bottom); return rec;
  };
  LAY.respiro = async (b) => LAY.statement(b, true);
  LAY.numero = async (b) => {
    const rec = await slide('Número', b, { center: true, auto: true });
    if (b.eyebrow) put(rec, await text(b.eyebrow, 'eyebrow', 'acento', G.CW, { nbsp: false }), 0, 'eyebrow');
    put(rec, await text(b.valor, 'numero', 'acento', null, { nbsp: false, name: 'valor' }), 16, 'valor');
    if (b.rotulo) put(rec, await text(b.rotulo, 'tituloC', 'texto/titulo', G.CW), 16, 'rotulo');
    if (b.texto) put(rec, await text(b.texto, 'corpo', 'texto/corpo', G.CW), G.gap, 'texto');
    if (b.fonte) await nota(rec, 'Fonte: ' + b.fonte, 'nota-fonte');
    centerBlocks(rec, G.CT, rec.notaTop ? rec.notaTop - 32 : rec.bottom); return rec;
  };
  LAY.citacao = async (b) => {
    const v = b.variante || 'aspas';
    const rec = await slide('Citação ' + v, b, { center: true, auto: false });
    if (v === 'cartao') {
      const c = card('card', 56); c.itemSpacing = 16; fixedW(c, G.CW);
      c.appendChild(await aspasGrandes(FMT === 'feed' ? 360 : 420)); c.appendChild(await text(b.texto, 'citacao', 'texto/titulo', G.CW - 112));
      put(rec, c, 0, 'citacao'); put(rec, await autor(b), 48, 'autor');
    } else if (v === 'balao') {
      const c = card('destaque', 48); c.itemSpacing = 16; fixedW(c, G.CW); c.bottomLeftRadius = 8; c.strokeWeight = 3;
      c.appendChild(await aspasGrandes(FMT === 'feed' ? 250 : 290)); c.appendChild(await text(b.texto, 'lead', 'texto/titulo', G.CW - 96));
      put(rec, c, 0, 'citacao'); const a = await autor(b, 80); put(rec, a, 32, 'autor'); a.x = G.X + 24;
    } else {
      const nw = words(b.texto), tam = (nw <= 12 ? 780 : nw <= 20 ? 620 : 500) * (FMT === 'feed' ? 1 : 1.15);
      put(rec, await aspasGrandes(tam), 0, 'aspas');
      put(rec, await text(b.texto, 'citacao', 'texto/titulo', G.CW), 40, 'citacao'); put(rec, await autor(b), 48, 'autor');
    }
    centerBlocks(rec); return rec;
  };
  async function iconCard(it, w, layout) {
    const pad = 32; const c = card('card', pad);
    if (layout === 'grade') { c.itemSpacing = 24; fixedW(c, w); if (it.icone) c.appendChild(badge(FMT === 'feed' ? 96 : 104, 'icone/fundo', icon(it.icone, 48, 'acento'))); const tx = al('VERTICAL', 'Texto', { itemSpacing: 8 }); tx.appendChild(await text(it.titulo, 'cardT', 'texto/titulo', w - 2 * pad)); if (it.texto) tx.appendChild(await text(it.texto, 'cardX', 'texto/corpo', w - 2 * pad)); c.appendChild(tx); return c; }
    c.layoutMode = 'HORIZONTAL'; c.itemSpacing = 32; c.counterAxisAlignItems = 'MIN'; fixedW(c, w);
    const iw = FMT === 'feed' ? 96 : 104; const tw = w - 2 * pad - (it.icone || it.numero ? iw + 32 : 0);
    if (it.icone) c.appendChild(badge(iw, 'icone/fundo', icon(it.icone, 48, 'acento')));
    else if (it.numero) c.appendChild(badge(iw, 'icone/fundo', await text(it.numero, 'cardT', 'acento', null, { nbsp: false })));
    const tx = al('VERTICAL', 'Texto', { itemSpacing: 8 }); tx.appendChild(await text(it.titulo, 'cardT', 'texto/titulo', tw)); if (it.texto) tx.appendChild(await text(it.texto, 'cardX', 'texto/corpo', tw)); c.appendChild(tx);
    return c;
  }
  LAY.cards = async (b) => {
    const rec = await slide('Cards', b); await head(rec, b, (b.compacto ?? b.variante === 'grade') ? 'tituloC' : 'titulo');
    const lay = b.variante || 'lista';
    if (lay === 'grade') {
      const g = al('HORIZONTAL', 'Grade', { itemSpacing: 24, counterAxisSpacing: 24 }); g.layoutWrap = 'WRAP'; fixedW(g, G.CW);
      const w = (G.CW - 24) / 2; for (const it of b.itens) g.appendChild(await iconCard(it, w, 'grade'));
      put(rec, g, G.block, 'cards');
      const rows = []; for (let i = 0; i < g.children.length; i += 2) rows.push(g.children.slice(i, i + 2)); for (const r of rows) { const h = Math.max(...r.map(n => n.height)); for (const n of r) { n.primaryAxisSizingMode = 'FIXED'; n.resize(n.width, h); } }
    } else {
      const l = al('VERTICAL', 'Lista', { itemSpacing: 24 }); fixedW(l, G.CW);
      for (const it of b.itens) l.appendChild(await iconCard(it, G.CW, 'lista'));
      put(rec, l, G.block, 'cards');
    }
    if (b.nota) { const t = await text(b.nota, 'nota', 'texto/apoio', G.CW); put(rec, t, 32, 'nota'); }
    return rec;
  };
  LAY.passos = async (b) => {
    const rec = await slide('Passos', b); await head(rec, b, b.compacto === false ? 'titulo' : (b.itens.length > 3 ? 'tituloC' : 'titulo'));
    const d = FMT === 'feed' ? 80 : 96; const l = al('VERTICAL', 'Passos', { itemSpacing: b.itens.length > 4 ? 32 : 48 }); fixedW(l, G.CW);
    for (const [i, it] of b.itens.entries()) {
      const row = al('HORIZONTAL', `Passo ${i + 1}`, { itemSpacing: 32 }); fixedW(row, G.CW);
      row.appendChild(badge(d, i === b.atual ? 'acento' : 'icone/fundo', await text(String(i + 1), 'cardT', i === b.atual ? 'cta/texto' : 'acento', null, { nbsp: false }), 'Número', true));
      const tx = al('VERTICAL', 'Texto', { itemSpacing: 8, paddingTop: Math.round((d - st('cardT').lineHeight.value) / 2) }); tx.appendChild(await text(it.titulo, 'cardT', 'texto/titulo', G.CW - d - 32)); if (it.texto) tx.appendChild(await text(it.texto, 'cardX', 'texto/corpo', G.CW - d - 32)); row.appendChild(tx);
      l.appendChild(row);
    }
    put(rec, l, G.block, 'passos');
    const first = l.children[0], lastR = l.children[l.children.length - 1];
    const rail = figma.createRectangle(); rail.name = 'Trilho'; rail.resize(4, lastR.y - first.y); rail.cornerRadius = 2; rail.fills = [paint('acento')]; rail.opacity = 0.4;
    rec.frame.insertChild(rec.frame.children.indexOf(l), rail); rail.x = G.X + d / 2 - 2; rail.y = l.y + d / 2;
    return rec;
  };
  LAY.timeline = async (b) => {
    const rec = await slide('Linha do tempo', b); await head(rec, b, b.itens.length > 3 ? 'tituloC' : 'titulo');
    if (b.nota) await nota(rec, b.nota);
    const marks = []; for (const it of b.itens) marks.push(await text(it.marca, 'cardT', 'acento', null, { nbsp: false, name: 'Marca' }));
    const mw = Math.ceil(Math.max(...marks.map(m => m.width))); for (const m of marks) { m.textAutoResize = 'HEIGHT'; m.resize(mw, m.height); }
    const dot = FMT === 'feed' ? 24 : 28; const lh = st('cardT').lineHeight.value; const tw = G.CW - mw - dot - 64;
    const l = al('VERTICAL', 'Linha do tempo', { itemSpacing: b.itens.length > 3 ? 40 : 56 }); fixedW(l, G.CW);
    for (const [i, it] of b.itens.entries()) {
      const row = al('HORIZONTAL', 'Etapa ' + it.marca, { itemSpacing: 32 }); fixedW(row, G.CW); row.appendChild(marks[i]);
      const mk = figma.createFrame(); mk.name = 'Marcador'; mk.fills = []; mk.resize(dot, lh); const e = figma.createEllipse(); e.name = 'Ponto'; e.resize(dot, dot); e.fills = [paint('acento')]; mk.appendChild(e); e.y = (lh - dot) / 2; row.appendChild(mk);
      const tx = al('VERTICAL', 'Texto', { itemSpacing: 8 }); tx.appendChild(await text(it.titulo, 'cardT', 'texto/titulo', tw)); if (it.texto) tx.appendChild(await text(it.texto, 'cardX', 'texto/corpo', tw)); row.appendChild(tx);
      l.appendChild(row);
    }
    put(rec, l, G.block, 'timeline');
    const rail = figma.createRectangle(); rail.name = 'Trilho'; rail.resize(4, l.children[l.children.length - 1].y - l.children[0].y); rail.cornerRadius = 2; rail.fills = [paint('acento')]; rail.opacity = 0.5;
    rec.frame.insertChild(rec.frame.children.indexOf(l), rail); rail.x = G.X + mw + 32 + dot / 2 - 2; rail.y = l.y + lh / 2;
    return rec;
  };
  async function panel(side, w, kind, iconName) {
    const pad = 40; const c = card(kind, pad); c.itemSpacing = 24; fixedW(c, w); if (kind === 'destaque') c.strokeWeight = 3;
    c.appendChild(await chip(side.rotulo, kind === 'destaque' ? 'acento' : 'texto/corpo', side.icone || iconName));
    const l = al('VERTICAL', 'Itens', { itemSpacing: 16 });
    for (const it of side.itens || []) l.appendChild(await text(it, 'cardT', 'texto/titulo', w - 2 * pad));
    if (side.texto) l.appendChild(await text(side.texto, 'corpo', 'texto/corpo', w - 2 * pad));
    c.appendChild(l); return c;
  }
  LAY.comparacao = async (b) => {
    const rec = await slide('Comparação', b); await head(rec, b, b.compacto ? 'tituloC' : 'titulo');
    const hi = b.destaque || 'b'; const stack = FMT === 'story' || b.variante === 'empilhada';
    const row = al(stack ? 'VERTICAL' : 'HORIZONTAL', 'Painéis', { itemSpacing: 24 }); fixedW(row, G.CW);
    const w = stack ? G.CW : (G.CW - 24) / 2;
    row.appendChild(await panel(b.a, w, hi === 'a' ? 'destaque' : 'card', b.a.icone || (hi === 'b' ? 'x' : null)));
    row.appendChild(await panel(b.b, w, hi === 'b' ? 'destaque' : 'card', b.b.icone || (hi === 'b' ? 'check' : null)));
    if (!stack) { const h = Math.max(...row.children.map(n => n.height)); for (const n of row.children) { n.primaryAxisSizingMode = 'FIXED'; n.resize(n.width, h); } }
    put(rec, row, G.block, 'paineis');
    if (b.veredito) put(rec, await text(b.veredito, 'destaque', 'texto/titulo', G.CW), 48, 'veredito');
    return rec;
  };
  LAY['mito-fato'] = async (b) => {
    const rec = await slide('Mito e fato', b, { center: !b.titulo }); if (b.titulo) await head(rec, { titulo: b.titulo }, 'tituloC');
    const m = card('card', 40); m.itemSpacing = 24; fixedW(m, G.CW);
    m.appendChild(await chip('Mito', 'erro', 'x')); m.appendChild(await text(b.mito, 'lead', 'texto/apoio', G.CW - 80));
    put(rec, m, G.block, 'mito');
    const f = card('destaque', 40); f.itemSpacing = 24; f.strokeWeight = 3; fixedW(f, G.CW);
    f.appendChild(await chip('Fato', 'acerto', 'check')); f.appendChild(await text(b.fato, 'lead', 'texto/titulo', G.CW - 80));
    if (b.explicacao) f.appendChild(await text(b.explicacao, 'cardX', 'texto/corpo', G.CW - 80));
    put(rec, f, 24, 'fato');
    if (b.fonte) await nota(rec, 'Fonte: ' + b.fonte, 'nota-fonte');
    if (rec.center) centerBlocks(rec, G.CT, rec.notaTop ? rec.notaTop - 32 : rec.bottom);
    return rec;
  };
  LAY.imagem = async (b) => {
    const rec = await slide('Imagem', b); await head(rec, b, 'tituloC');
    const cap = [];
    if (b.legenda) cap.push(await text(b.legenda, 'lead', 'texto/titulo', G.CW));
    if (b.texto) cap.push(await text(b.texto, 'cardX', 'texto/corpo', G.CW));
    if (b.fonte) await nota(rec, 'Fonte: ' + b.fonte, 'nota-fonte');
    const capH = cap.reduce((a, t) => a + t.height, 0) + (cap.length ? 32 + (cap.length - 1) * 16 : 0);
    const top = rec.y + (rec.used ? 48 : 0), lim = (rec.notaTop ? rec.notaTop - 32 : rec.bottom) - capH;
    const ratio = b.imagem && b.imagem.ratio || 1.33; const h = Math.max(160, Math.min(lim - top, Math.round(G.CW / ratio)));
    put(rec, await image(b.imagem, G.CW, h), 48, 'imagem');
    for (const [i, t] of cap.entries()) put(rec, t, i ? 16 : 32, i ? 'texto' : 'legenda');
    return rec;
  };
  LAY.grafico = async (b) => {
    const rec = await slide('Gráfico', b); await head(rec, b, 'tituloC');
    if (b.fonte) await nota(rec, 'Fonte: ' + b.fonte, 'nota-fonte');
    const max = Math.max(...b.barras.map(x => x.valor)); const few = b.barras.length <= 3; const bh = few ? 72 : 56; const l = al('VERTICAL', 'Barras', { itemSpacing: few ? 48 : 24 }); fixedW(l, G.CW);
    for (const [i, x] of b.barras.entries()) {
      const on = i === (b.destaque ?? 0);
      const r = al('VERTICAL', 'Barra ' + x.rotulo, { itemSpacing: 8 }); fixedW(r, G.CW);
      r.appendChild(await text(x.rotulo, 'chip', on ? 'texto/titulo' : 'texto/corpo', G.CW, { nbsp: false }));
      const line = al('HORIZONTAL', 'Linha', { itemSpacing: 16, counterAxisAlignItems: 'CENTER' });
      const bar = figma.createRectangle(); bar.name = 'Barra'; bar.resize(Math.max(bh, Math.round(760 * x.valor / max)), bh); bar.cornerRadius = bh / 2; bar.fills = [paint('acento')]; if (!on) bar.opacity = 0.32;
      line.appendChild(bar); line.appendChild(await text(x.texto || String(x.valor) + (b.unidade || ''), 'valor', on ? 'texto/titulo' : 'texto/corpo', null, { nbsp: false })); r.appendChild(line); l.appendChild(r);
    }
    put(rec, l, G.block, 'barras'); return rec;
  };
  LAY.pergunta = async (b) => {
    const rec = await slide('Pergunta', b, { center: true, auto: true });
    const q = await text('?', 'numero', 'acento', null, { nbsp: false, name: 'motivo/interrogacao' }); rec.frame.appendChild(q);
    q.fontSize = FMT === 'feed' ? 640 : 760; q.lineHeight = { unit: 'PERCENT', value: 100 }; q.opacity = 0.14; q.x = G.W - q.width * 0.58; q.y = Math.round((G.CT + G.CB) / 2 - q.height * 0.35);
    if (b.eyebrow) put(rec, await text(b.eyebrow, 'eyebrow', 'acento', G.CW, { nbsp: false }), 0, 'eyebrow');
    put(rec, await text(b.pergunta, 'statement', 'texto/titulo', FMT === 'feed' ? 800 : G.CW), 24, 'pergunta');
    if (b.apoio) put(rec, await text(b.apoio, 'corpo', 'texto/corpo', FMT === 'feed' ? 760 : G.CW), 40, 'apoio');
    if (!rec.slot) centerBlocks(rec);
    return rec;
  };
  LAY.definicao = async (b) => {
    const rec = await slide('Definição', b, { auto: true });
    put(rec, await text(b.eyebrow || 'Definição', 'eyebrow', 'acento', G.CW, { nbsp: false }), 0, 'eyebrow');
    put(rec, await text(b.termo, 'titulo', 'texto/titulo', G.CW), 16, 'termo');
    put(rec, await text(b.definicao, 'lead', 'texto/corpo', G.CW), G.gap, 'definicao');
    if (b.exemplo) { const c = card('card', 40); c.itemSpacing = 16; fixedW(c, G.CW); c.appendChild(await text(b.exemploRotulo || 'Exemplo', 'eyebrow', 'acento', G.CW - 80, { nbsp: false })); c.appendChild(await text(b.exemplo, 'corpo', 'texto/corpo', G.CW - 80)); put(rec, c, G.block, 'exemplo'); }
    return rec;
  };
  LAY.resumo = async (b) => {
    const rec = await slide('Resumo', b); await head(rec, { eyebrow: b.eyebrow, titulo: b.titulo || 'Resumo' }, 'titulo');
    const l = al('VERTICAL', 'Itens', { itemSpacing: 32 }); fixedW(l, G.CW); const d = 64;
    for (const it of b.itens) { const row = al('HORIZONTAL', 'Item', { itemSpacing: 32, counterAxisAlignItems: 'MIN' }); fixedW(row, G.CW); row.appendChild(badge(d, 'icone/fundo', icon(b.icone || 'check', 32, 'acento'))); const tx = al('VERTICAL', 'Texto', { paddingTop: 8 }); tx.appendChild(await text(it, 'cardT', 'texto/titulo', G.CW - d - 32)); row.appendChild(tx); l.appendChild(row); }
    put(rec, l, G.block, 'itens'); return rec;
  };
  LAY.fechamento = async (b) => {
    const rec = await slide('Fechamento', b, { auto: true }); await head(rec, b);
    if (b.destaque) { const c = card('destaque', 48); c.itemSpacing = 16; fixedW(c, G.CW); if (b.destaque.eyebrow) c.appendChild(await text(b.destaque.eyebrow, 'eyebrow', 'acento', G.CW - 96, { nbsp: false })); c.appendChild(await text(b.destaque.texto, 'destaque', 'texto/titulo', G.CW - 96)); put(rec, c, G.block, 'destaque'); }
    if (FMT === 'story' && b.sticker === 'link') {
      const a = al('VERTICAL', 'Chamada do link', { itemSpacing: 16, counterAxisAlignItems: 'CENTER' }); fixedW(a, G.CW);
      a.appendChild(await text(b.cta, 'cardT', 'texto/titulo', G.CW, { align: 'CENTER' })); a.appendChild(icon('arrow-down', 64, 'acento'));
      rec.frame.appendChild(a); a.x = G.X; a.y = rec.slot[1] - 48 - a.height;
      centerBlocks(rec, G.CT, a.y - G.block); a.name = 'bloco/cta';
    } else if (b.cta) { put(rec, await pill(b.cta), G.block, 'cta'); if (FMT === 'story') centerBlocks(rec); }
    return rec;
  };
  // stories: cartão com sticker nativo (enquete, quiz, caixa, slider, contagem) — o motor só reserva o espaço
  LAY.interacao = async (b) => {
    if (FMT !== 'story') throw new Error('interacao é só de stories');
    const rec = await slide('Interação ' + (b.sticker || ''), b); await head(rec, b, b.titulo && words(b.titulo) > 6 ? 'tituloC' : 'titulo');
    if (b.instrucao) { const t = await text(b.instrucao, 'nota', 'texto/apoio', G.CW); rec.frame.appendChild(t); t.x = G.X; t.y = rec.slot[1] + rec.slot[3] + 24; t.name = 'bloco/nota-instrucao'; }
    return rec;
  };
  // stories: divulga um post do feed com miniatura de um slide
  LAY.post = async (b) => {
    if (FMT !== 'story') throw new Error('post é só de stories');
    const rec = await slide('Divulgação de post', b); await head(rec, { eyebrow: b.eyebrow || 'Post novo', titulo: b.titulo }, 'tituloC');
    const src = await figma.getNodeByIdAsync(b.origem); if (!src) throw new Error('post: slide de origem ausente ' + b.origem);
    const lim = rec.bottom - (rec.y + G.block); const k = Math.min(720 / src.width, lim / src.height);
    const box = figma.createFrame(); box.name = 'Miniatura'; box.resize(Math.round(src.width * k), Math.round(src.height * k)); box.cornerRadius = 32; box.clipsContent = true; box.fills = []; box.strokes = [paint('card/borda')]; box.strokeWeight = 2;
    const c = src.clone(); box.appendChild(c); c.rescale(k); c.x = 0; c.y = 0;
    box.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.35 }, offset: { x: 0, y: 24 }, radius: 64, spread: 0, visible: true, blendMode: 'NORMAL' }];
    put(rec, box, G.block, 'miniatura'); box.x = (G.W - box.width) / 2;
    return rec;
  };

  // ---------- QA ----------
  // textos de instâncias (marca) e de miniaturas de outro post ficam fora do QA do slide
  const inInst = n => { for (let p = n.parent; p && p.type !== 'PAGE'; p = p.parent) if (p.type === 'INSTANCE' || /Miniatura|miniatura/.test(p.name)) return true; return false; };
  async function qa(wrapperId, fmt) {
    const wr = await figma.getNodeByIdAsync(wrapperId); const g = GEO[fmt]; const out = []; const add = (s, sev, rule, d) => out.push({ slide: s, sev, rule, detail: d });
    const fr = wr.children; const n = fr.length; let run = 1;
    const kinds = fr.map(s => (s.name.split(' — ')[1] || '').split(' ')[0]);
    fr.forEach((s, i) => {
      const kind = kinds[i]; const t = (slides[i] && slides[i].t) || kind.toLowerCase();
      if (i && kind === kinds[i - 1]) { run++; if (run > 2) add(s.name, 'WARNING', 'V1 arquétipo repetido', `${run} seguidos`); if (LEVES.includes(t) && kind !== 'Cards') add(s.name, 'WARNING', 'V1 foco consecutivo', 'arquétipos de foco não se repetem em sequência'); } else run = 1;
      let w = 0; const slotR = s.findOne(x => x.name.startsWith('slot/'));
      for (const tx of s.findAllWithCriteria({ types: ['TEXT'] })) {
        if (!tx.visible || inInst(tx)) continue;
        for (const sg of tx.getStyledTextSegments(['fontName', 'fontSize'])) { if (sg.fontName.family !== 'Clash Display') add(s.name, 'ERROR', 'T1 família', sg.fontName.family); if (sg.fontSize < g.minFont && !/motivo/.test(tx.name)) add(s.name, 'ERROR', 'T2 fonte pequena', `${sg.fontSize}px "${tx.characters.slice(0, 20)}"`); }
        if (LONG.has(tx.id)) add(s.name, 'ERROR', 'T4 palavra maior que a linha', `"${tx.characters.slice(0, 30)}": encurte ou troque a palavra`);
        if (/motivo|aspas/.test(tx.name)) continue;
        const b = tx.absoluteBoundingBox, p = s.absoluteBoundingBox, x0 = b.x - p.x, y0 = b.y - p.y;
        if (x0 < g.SAFE[0] - 1 || x0 + b.width > g.SAFE[2] + 1 || y0 < g.SAFE[1] - 1 || y0 + b.height > g.SAFE[3] + 1) add(s.name, 'ERROR', 'G1 fora da área segura', `"${tx.characters.slice(0, 30)}"`);
        if (slotR) { const r = slotR; if (!(x0 + b.width < r.x || x0 > r.x + r.width || y0 + b.height < r.y - 47 || y0 > r.y + r.height + 23)) add(s.name, 'ERROR', 'G3 invade o slot do sticker', `"${tx.characters.slice(0, 30)}"`); }
        if (!/^Rodapé|^Cabeçalho|Chip texto|Crédito texto|^bloco\/nota/.test(tx.name) && !(tx.parent && /Rodapé|Cabeçalho/.test(tx.parent.name))) w += words(tx.characters);
      }
      for (const nd of s.children) if (nd.name.startsWith('bloco/') && nd.visible) { const lim = (slides[i] && slides[i].bottom) || g.CB; if (nd.y + nd.height > lim + 1 && !nd.name.startsWith('bloco/nota')) add(s.name, 'ERROR', 'G2 conteúdo passa do limite', `${nd.name.slice(6)} termina em y=${Math.round(nd.y + nd.height)} (limite ${lim})`); }
      const notas = s.children.filter(nd => nd.name.startsWith('bloco/nota')); for (const nt of notas) for (const nd of s.children) if (nd.name.startsWith('bloco/') && !nd.name.startsWith('bloco/nota') && nd.y + nd.height > nt.y - 24) add(s.name, 'ERROR', 'G2 conteúdo encosta na nota', nd.name.slice(6));
      const cls = i === 0 ? 'capa' : (t === 'fechamento' ? 'fechamento' : t === 'citacao' ? 'citacao' : (LEVES.includes(t) ? 'leve' : 'miolo')); const [alvo, teto] = WORDS[fmt][cls];
      if (w > teto) add(s.name, 'ERROR', 'D1 palavras', `${w} > ${teto} (${cls})`); else if (w > alvo) add(s.name, 'WARNING', 'D1 palavras', `${w} > alvo ${alvo} (${cls})`);
      if (slides[i]) slides[i].words = w;
      const tt = s.children.find(x => x.name === 'bloco/titulo');
      if (tt && tt.type === 'TEXT') { const lines = Math.round(tt.height / tt.lineHeight.value); const max = fmt === 'feed' ? 2 : 4; if (lines > max) add(s.name, 'ERROR', 'T3 título com linhas demais', `${lines} > ${max}`); }
      const hk = s.findOne(x => x.name === 'Hook'); if (hk && hk.type === 'TEXT') { const lines = Math.round(hk.height / hk.lineHeight.value); if (lines > 4) add(s.name, 'ERROR', 'T3 hook com linhas demais', `${lines} > 4`); }
      if (slides[i] && !slides[i].center && i > 0 && t !== 'fechamento') {
        const body = s.children.filter(nd => nd.name.startsWith('bloco/') && !/^bloco\/(eyebrow|titulo|corpo|nota)/.test(nd.name));
        if (body.length) { const bottom = Math.max(...body.map(nd => nd.y + nd.height)); const occ = (bottom - g.CT) / ((slides[i].bottom || g.CB) - g.CT); if (occ < 0.6) add(s.name, 'WARNING', 'D2 slide vazio embaixo', `conteúdo ocupa ${Math.round(occ * 100)}% da altura útil`); }
      }
      for (const im of s.findAll(x => x.name.startsWith('Imagem pendente'))) add(s.name, 'REVIEW', 'imagem pendente', im.name.slice(17));
    });
    if (fmt === 'feed' && n >= 7) { const distinct = new Set(kinds.slice(1, -1)).size; if (distinct < 4) add('post', 'WARNING', 'V2 pouca variedade', `${distinct} arquétipos distintos no miolo (mín. 4)`); }
    return out;
  }

  async function build(plan) {
    post = plan.post; FMT = plan.formato === 'stories-9x16' ? 'story' : 'feed'; G = GEO[FMT]; slides = []; LONG = new Set(); formaN = 0; total = plan.slides.length;
    await init();
    let page = post.pageId ? await figma.getNodeByIdAsync(post.pageId) : figma.root.children.find(p => p.name === CFG.page);
    if (!page) { page = figma.createPage(); page.name = CFG.page; }
    await figma.setCurrentPageAsync(page);
    let maxY = 0; for (const c of page.children) maxY = Math.max(maxY, c.y + c.height);
    wrapper = figma.createAutoLayout('HORIZONTAL', { name: `${FMT === 'feed' ? 'Carrossel 4:5' : 'Stories 9:16'} — ${post.titulo}`, itemSpacing: 80, paddingTop: 120, paddingBottom: 120, paddingLeft: 120, paddingRight: 120 });
    wrapper.fills = [{ type: 'SOLID', color: { r: 0.91, g: 0.93, b: 0.96 } }]; wrapper.x = 0; wrapper.y = maxY ? maxY + 400 : 0;
    for (const [i, b] of plan.slides.entries()) {
      if (!LAY[b.t]) throw new Error(`slide ${i + 1}: arquétipo desconhecido "${b.t}"`);
      const rec = await LAY[b.t](b); await footer(rec, i + 1, total);
    }
    const issues = plan.skipQA ? [] : await qa(wrapper.id, FMT);
    return { pageId: page.id, wrapper: wrapper.id, formato: plan.formato, slides: slides.map(s => ({ id: s.frame.id, name: s.frame.name, modo: s.mode, palavras: s.words })), qa: issues };
  }
  return { build, qa, icons: Object.keys(ICONS), version: '1.14' };
})();
return LIGA_SOCIAL;
