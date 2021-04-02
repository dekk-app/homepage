import { IconSize } from "@/ions/enums";

export const icons = {
	[IconSize.s]: {
		chevronDown:
			"M8 10.62a.49.49 0 01-.35-.15L4.34 7.13a.49.49 0 11.7-.7l3 3 3-3a.49.49 0 11.7.7l-3.36 3.34a.47.47 0 01-.38.15z",
		chevronLeft:
			"M5.86 8.45A.47.47 0 016 8.1l3.35-3.34a.49.49 0 01.7.7l-3 3 3 3a.49.49 0 01-.7.7L6 8.8a.47.47 0 01-.14-.35z",
		chevronRight:
			"M10.2 8.45a.47.47 0 01-.15.35l-3.34 3.34a.49.49 0 01-.7-.7l3-3-3-3a.49.49 0 11.7-.7l3.34 3.36a.47.47 0 01.15.35z",
		chevronUp:
			"M8 6.28a.47.47 0 01.35.15l3.34 3.34a.49.49 0 11-.7.7l-3-3-3 3a.49.49 0 11-.7-.7l3.39-3.34A.49.49 0 018 6.28z",
		editorImage:
			"M11.59 1.35H4.41a3.07 3.07 0 00-3.06 3.06v7.18a3.07 3.07 0 003.06 3.06h7.18a3.07 3.07 0 003.06-3.06V4.41a3.07 3.07 0 00-3.06-3.06zm-7.18 1h7.18a2.07 2.07 0 012.06 2.06v6.38a7.72 7.72 0 01-5.86-1.32A9.46 9.46 0 002.35 8V4.41a2.07 2.07 0 012.06-2.06zm7.18 11.3H4.41a2.07 2.07 0 01-2.06-2.06V9a8.51 8.51 0 014.83 1.3 8.32 8.32 0 005.06 1.64 9.7 9.7 0 001.38-.1 2 2 0 01-2.03 1.81zm-1.24-5.46A2.4 2.4 0 108 5.79a2.4 2.4 0 002.35 2.4zm0-3.79a1.4 1.4 0 010 2.79 1.4 1.4 0 110-2.79z",
		editorText:
			"M14.22 2.13v2.61a.5.5 0 01-.5.5.5.5 0 01-.5-.5V2.63H8.5v10.44h1.69a.51.51 0 01.5.5.5.5 0 01-.5.5H5.81a.5.5 0 01-.5-.5.51.51 0 01.5-.5H7.5V2.63H2.78v2.11a.5.5 0 01-.5.5.5.5 0 01-.5-.5V2.13a.5.5 0 01.5-.5h11.44a.5.5 0 01.5.5z",
		menu:
			"M1.82 4.2a.5.5 0 01.5-.5h11.36a.5.5 0 01.5.5.5.5 0 01-.5.5H2.32a.5.5 0 01-.5-.5zm11.86 3.25H2.32a.5.5 0 00-.5.5.5.5 0 00.5.5h11.36a.5.5 0 00.5-.5.5.5 0 00-.5-.5zm0 3.85H2.32a.5.5 0 00-.5.5.5.5 0 00.5.5h11.36a.5.5 0 00.5-.5.5.5 0 00-.5-.5z",
		play:
			"M14 8a1.71 1.71 0 01-.82 1.47L4.6 14.71a1.7 1.7 0 01-.89.26 1.74 1.74 0 01-.84-.23 1.71 1.71 0 01-.87-1.5V2.7a1.73 1.73 0 01.87-1.51 1.68 1.68 0 011.73 0l8.58 5.27A1.71 1.71 0 0114 8z",
		plus:
			"M14.38 8a.5.5 0 01-.5.5H8.51v5.37a.5.5 0 01-1 0V8.5h-5a.5.5 0 010-1h5V2.13a.5.5 0 011 0V7.5h5.37a.5.5 0 01.5.5z",
	},
	[IconSize.m]: {
		chevronDown:
			"M12 16a.75.75 0 01-.53-.22L5.78 10.1A.75.75 0 016.84 9L12 14.2 17.16 9a.75.75 0 011.06 1.06l-5.69 5.69A.75.75 0 0112 16z",
		chevronRight:
			"M15.59 12.42a.75.75 0 01-.22.53l-5.68 5.68a.75.75 0 11-1.06-1.06l5.15-5.15-5.15-5.16a.74.74 0 010-1.06.75.75 0 011.06 0l5.68 5.69a.75.75 0 01.22.53z",
		chevronLeft:
			"M8.41 12.42a.71.71 0 01.22-.53l5.68-5.69a.75.75 0 011.06 0 .74.74 0 010 1.06l-5.15 5.16 5.15 5.15a.75.75 0 11-1.06 1.06L8.63 13a.71.71 0 01-.22-.58z",
		chevronUp:
			"M12 8.82a.75.75 0 01.53.22l5.69 5.69a.75.75 0 01-1.06 1.06L12 10.63l-5.16 5.16a.75.75 0 01-1.06-1.06L11.47 9a.75.75 0 01.53-.18z",
		editorImage:
			"M18 2.9H6A3.06 3.06 0 002.9 6v12A3.06 3.06 0 006 21.1h12a3.06 3.06 0 003.1-3.1V6A3.06 3.06 0 0018 2.9zm-12 1h12A2.06 2.06 0 0120.1 6v10.1a11 11 0 01-8.52-1.84c-2.56-2-6.3-2.09-7.68-2.07V6A2.06 2.06 0 016 3.9zm12 16.2H6A2.06 2.06 0 013.9 18v-4.85c1.26 0 4.78.12 7.08 1.86a11.36 11.36 0 007 2.26 12.3 12.3 0 002.17-.19v1A2.06 2.06 0 0118 20.1zm-2.75-8a3.15 3.15 0 10-3.15-3.15 3.16 3.16 0 003.19 3.11zm0-5.3a2.15 2.15 0 11-2.15 2.15 2.15 2.15 0 012.19-2.19z",
		editorText:
			"M20.91 3.59v3.84a.5.5 0 01-.5.5.5.5 0 01-.5-.5V4.09H12.5v15.82h2.71a.5.5 0 01.5.5.5.5 0 01-.5.5H8.79a.5.5 0 01-.5-.5.5.5 0 01.5-.5h2.71V4.09H4.09v3.34a.5.5 0 01-.5.5.5.5 0 01-.5-.5V3.59a.51.51 0 01.5-.5h16.82a.51.51 0 01.5.5z",
		menu:
			"M4.23 7.26a.5.5 0 01.5-.5h14.54a.5.5 0 01.5.5.5.5 0 01-.5.5H4.73a.5.5 0 01-.5-.5zm15 4.3H4.73a.5.5 0 00-.5.5.5.5 0 00.5.5h14.54a.5.5 0 00.5-.5.5.5 0 00-.5-.5zm0 4.94H4.73a.5.5 0 00-.5.5.5.5 0 00.5.5h14.54a.5.5 0 00.5-.5.5.5 0 00-.5-.5z",
		play:
			"M18 12a1.74 1.74 0 01-.82 1.48L8.6 18.74a1.62 1.62 0 01-.89.26A1.71 1.71 0 016 17.27V6.73a1.74 1.74 0 01.87-1.51 1.7 1.7 0 011.73 0l8.58 5.26A1.74 1.74 0 0118 12z",
		plus:
			"M20.67 12a.5.5 0 01-.5.5h-7.9v7.9a.5.5 0 01-.5.5.5.5 0 01-.5-.5v-7.9H3.83a.5.5 0 01-.5-.5.5.5 0 01.5-.5h7.44V3.59a.51.51 0 01.5-.5.5.5 0 01.5.5v7.91h7.9a.5.5 0 01.5.5z",
	},
	[IconSize.l]: {
		chevronDown:
			"M20 27a1 1 0 01-.71-.3l-8.85-8.85a1 1 0 010-1.41 1 1 0 011.41 0L20 24.61l8.15-8.14a1 1 0 011.41 0 1 1 0 010 1.41l-8.85 8.85A1 1 0 0120 27z",
		chevronRight:
			"M25.43 21.6a1 1 0 01-.3.71l-8.85 8.85a1 1 0 01-1.41 0 1 1 0 010-1.41L23 21.6l-8.14-8.15a1 1 0 010-1.41 1 1 0 011.41 0l8.85 8.85a1 1 0 01.31.71z",
		chevronLeft:
			"M14.57 21.6a1 1 0 01.3-.71L23.72 12a1 1 0 011.41 1.41L17 21.6l8.14 8.15a1 1 0 01-1.41 1.41l-8.85-8.85a1 1 0 01-.31-.71z",
		chevronUp:
			"M20 16.17a1 1 0 01.71.3l8.85 8.85a1 1 0 01-1.41 1.41L20 18.59l-8.15 8.14a1 1 0 01-1.41-1.41l8.85-8.85a1 1 0 01.71-.3z",
		editorImage:
			"M30.16 3.36H9.84a6.48 6.48 0 00-6.48 6.48v20.32a6.48 6.48 0 006.48 6.48h20.32a6.48 6.48 0 006.48-6.48V9.84a6.48 6.48 0 00-6.48-6.48zm-20.32 2h20.32a4.49 4.49 0 014.48 4.48v17.48c-2.22.42-9.24 1.26-15.34-3.36-4.63-3.51-11.3-3.8-13.94-3.77V9.84a4.49 4.49 0 014.48-4.48zm20.32 29.28H9.84a4.49 4.49 0 01-4.48-4.48v-8c2.34 0 8.61.24 12.73 3.36a20.81 20.81 0 0012.7 4.13 23.38 23.38 0 003.85-.32v.8a4.49 4.49 0 01-4.48 4.51zM26 20.2a5.82 5.82 0 10-5.82-5.82A5.83 5.83 0 0026 20.2zm0-9.64a3.82 3.82 0 11-3.82 3.82A3.82 3.82 0 0126 10.56z",
		editorText:
			"M35 6v6.41a1 1 0 11-2 0V7H21v26h4.36a1 1 0 010 2H14.64a1 1 0 010-2H19V7H7v5.41a1 1 0 01-2 0V6a1 1 0 011-1h28a1 1 0 011 1z",
		menu:
			"M6.07 11.35a1 1 0 011-1h25.86a1 1 0 010 2H7.07a1 1 0 01-1-1zm26.86 16.3H7.07a1 1 0 000 2h25.86a1 1 0 000-2zm0-8.77H7.07a1 1 0 000 2h25.86a1 1 0 000-2z",
		play:
			"M37.84 20a4.39 4.39 0 01-2.19 3.8L12.77 37.34a4.58 4.58 0 01-4.6.08 4.4 4.4 0 01-2.33-3.87V6.45a4.4 4.4 0 012.33-3.87 4.59 4.59 0 014.6.08L35.65 16.2a4.39 4.39 0 012.19 3.8z",
		plus:
			"M35.57 20a1 1 0 01-1 1h-14v14a1 1 0 01-2 0V21H5.43a1 1 0 010-2h13.16V5a1 1 0 012 0v14h14a1 1 0 01.98 1z",
	},
};