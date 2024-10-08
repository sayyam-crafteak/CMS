//NormalCSS to TailwindCSS
export const convertStylesToTailwind = (general_styles: any) => {
  const tailwindStyles = {fontSize:"" ,fontWeight:"", fontStyle:"", textDecoration: "", backgroundColor: "", textColor: ""};

  // Convert fontSize to Tailwind class
  if (general_styles.fontSize) {
    const fontSize = parseInt(general_styles.fontSize.replace('px', ''), 10);
    const fontSizeMapping: { [fontSize: number]: string } = {
      12: 'text-xs',
      14: 'text-sm',
      16: 'text-base',
      18: 'text-lg',
      20: 'text-xl',
      24: 'text-2xl',
      30: 'text-3xl',
      36: 'text-4xl',
      48: 'text-5xl',
      60: 'text-6xl',
      72: 'text-7xl',
      96: 'text-8xl',
      128: 'text-9xl'
    };

    if (typeof fontSize === 'number') {
      tailwindStyles.fontSize = fontSizeMapping[fontSize] || "text-["+fontSize+'px'+"]";
    }
  }
  
  // Convert fontWeight to Tailwind class
  if (general_styles.fontWeight) {
    const fontWeight = parseInt(general_styles.fontWeight);
    const fontWeightMapping: { [fontWeight: number]: string } = {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
      800: 'font-extrabold',
      900: 'font-black'
    };
    if (typeof fontWeight === 'number') {
      tailwindStyles.fontWeight = fontWeightMapping[fontWeight] || '400';
    }      
  }

  // Convert fontStyle to Tailwind class
  if (general_styles.fontStyle) {
    if (general_styles.fontStyle === 'normal'){
      tailwindStyles.fontStyle = 'not-italic';
    }else{
      tailwindStyles.fontStyle = 'italic';
    }
  }

  // Convert textDecoration to Tailwind class
  if (general_styles.textDecoration) {
    if (general_styles.textDecoration === 'none') {
      tailwindStyles.textDecoration = 'no-underline';
    }
    else if (general_styles.textDecoration === 'underline') {
      tailwindStyles.textDecoration = 'underline';
    }
    else {
      tailwindStyles.textDecoration = 'no-underline';
    }
  }

  // Convert backgroundColor to Tailwind class
  if (general_styles.backgroundColor){
    const backgroundColor = general_styles.backgroundColor.replace(/\s/g, '') ; // remove all white spaces present in the string
    const backgroundColorMapping: {[backgroundColor: string]: string} = {
      "transparent": "bg-transparent",
      "none": "bg-transparent",
      "rgba(0,0,0,0)": "bg-transparent",
      "rgb(0,0,0)": "bg-black",
      "rgb(255,255,255)": "bg-white",

      // SLATE
      "rgb(248,250,252)": "bg-slate-50",
      "rgb(241,245,249)": "bg-slate-100",
      "rgb(226,232,240)": "bg-slate-200",
      "rgb(203,213,225)": "bg-slate-300",
      "rgb(148,163,184)": "bg-slate-400",
      "rgb(100,116,139)": "bg-slate-500",
      "rgb(71,85,105)": "bg-slate-600",
      "rgb(51,65,85)": "bg-slate-700",
      "rgb(30,41,59)": "bg-slate-800",
      "rgb(15,23,42)": "bg-slate-900",
      "rgb(2,6,23)": "bg-slate-950",

      // GRAY
      "rgb(249,250,251)": "bg-gray-50",
      "rgb(243,244,246)": "bg-gray-100",
      "rgb(229,231,235)": "bg-gray-200",
      "rgb(209,213,219)": "bg-gray-300",
      "rgb(156,163,175)": "bg-gray-400",
      "rgb(107,114,128)": "bg-gray-500",
      "rgb(75,85,99)": "bg-gray-600",
      "rgb(55,65,81)": "bg-gray-700",
      "rgb(31,41,55)": "bg-gray-800",
      "rgb(17,24,39)": "bg-gray-900",
      "rgb(3,7,18)": "bg-gray-950",

      // ZINC
      "rgb(250,250,250)": "bg-zinc-50",
      "rgb(244,244,245)": "bg-zinc-100",
      "rgb(228,228,231)": "bg-zinc-200",
      "rgb(212,212,216)": "bg-zinc-300",
      "rgb(161,161,170)": "bg-zinc-400",
      "rgb(113,113,122)": "bg-zinc-500",
      "rgb(82,82,91)": "bg-zinc-600",
      "rgb(63,63,70)": "bg-zinc-700",
      "rgb(39,39,42)": "bg-zinc-800",
      "rgb(24,24,27)": "bg-zinc-900",
      "rgb(9,9,11)": "bg-zinc-950",

      // NEUTRAL
      "rgb(245,245,245)": "bg-neutral-100",
      "rgb(229,229,229)": "bg-neutral-200",
      "rgb(212,212,212)": "bg-neutral-300",
      "rgb(163,163,163)": "bg-neutral-400",
      "rgb(115,115,115)": "bg-neutral-500",
      "rgb(82,82,82)": "bg-neutral-600",
      "rgb(64,64,64)": "bg-neutral-700",
      "rgb(38,38,38)": "bg-neutral-800",
      "rgb(23,23,23)": "bg-neutral-900",
      "rgb(10,10,10)": "bg-neutral-950",

      // STONE
      "rgb(250,250,249)": "bg-stone-50",
      "rgb(245,245,244)": "bg-stone-100",
      "rgb(231,229,228)": "bg-stone-200",
      "rgb(214,211,209)": "bg-stone-300",
      "rgb(168,162,158)": "bg-stone-400",
      "rgb(120,113,108)": "bg-stone-500",
      "rgb(87,83,78)": "bg-stone-600",
      "rgb(68,64,60)": "bg-stone-700",
      "rgb(41,37,36)": "bg-stone-800",
      "rgb(28,25,23)": "bg-stone-900",
      "rgb(12,10,9)": "bg-stone-950",

      // RED
      "rgb(254,242,242)": "bg-red-50",
      "rgb(254,226,226)": "bg-red-100",
      "rgb(254,202,202)": "bg-red-200",
      "rgb(252,165,165)": "bg-red-300",
      "rgb(248,113,113)": "bg-red-400",
      "rgb(239,68,68)": "bg-red-500",
      "rgb(220,38,38)": "bg-red-600",
      "rgb(185,28,28)": "bg-red-700",
      "rgb(153,27,27)": "bg-red-800",
      "rgb(127,29,29)": "bg-red-900",
      "rgb(69,10,10)": "bg-red-950",

      //ORANGE
      "rgb(255,247,237)": "bg-orange-50",
      "rgb(255,237,213)": "bg-orange-100",
      "rgb(254,215,170)": "bg-orange-200",
      "rgb(253,186,116)": "bg-orange-300",
      "rgb(251,146,60)": "bg-orange-400",
      "rgb(249,115,22)": "bg-orange-500",
      "rgb(234,88,12)": "bg-orange-600",
      "rgb(194,65,12)": "bg-orange-700",
      "rgb(154,52,18)": "bg-orange-800",
      "rgb(124,45,18)": "bg-orange-900",
      "rgb(67,20,7)": "bg-orange-950",

      // AMBER
      "rgb(255,251,235)": "bg-amber-50",
      "rgb(254,243,199)": "bg-amber-100",
      "rgb(253,230,138)": "bg-amber-200",
      "rgb(252,211,77)": "bg-amber-300",
      "rgb(251,191,36)": "bg-amber-400",
      "rgb(245,158,11)": "bg-amber-500",
      "rgb(217,119,6)": "bg-amber-600",
      "rgb(180,83,9)": "bg-amber-700",
      "rgb(146,64,14)": "bg-amber-800",
      "rgb(120,53,15)": "bg-amber-900",
      "rgb(69,26,3)": "bg-amber-950",

      // YELLOW
      "rgb(254,252,232)": "bg-yellow-50",
      "rgb(254,249,195)": "bg-yellow-100",
      "rgb(254,240,138)": "bg-yellow-200",
      "rgb(253,224,71)": "bg-yellow-300",
      "rgb(250,204,21)": "bg-yellow-400",
      "rgb(234,179,8)": "bg-yellow-500",
      "rgb(202,138,4)": "bg-yellow-600",
      "rgb(161,98,7)": "bg-yellow-700",
      "rgb(133,77,14)": "bg-yellow-800",
      "rgb(113,63,18)": "bg-yellow-900",
      "rgb(66,32,6)": "bg-yellow-950",

      // LIME
      "rgb(247,254,231)": "bg-lime-50",
      "rgb(236,252,203)": "bg-lime-100",
      "rgb(217,249,157)": "bg-lime-200",
      "rgb(190,242,100)": "bg-lime-300",
      "rgb(163,230,53)": "bg-lime-400",
      "rgb(132,204,22)": "bg-lime-500",
      "rgb(101,163,13)": "bg-lime-600",
      "rgb(77,124,15)": "bg-lime-700",
      "rgb(63,98,18)": "bg-lime-800",
      "rgb(54,83,20)": "bg-lime-900",
      "rgb(26,46,5)": "bg-lime-950",

      // GREEN
      "rgb(240,253,244)": "bg-green-50",
      "rgb(220,252,231)": "bg-green-100",
      "rgb(187,247,208)": "bg-green-200",
      "rgb(134,239,172)": "bg-green-300",
      "rgb(74,222,128)": "bg-green-400",
      "rgb(34,197,94)": "bg-green-500",
      "rgb(22,163,74)": "bg-green-600",
      "rgb(21,128,61)": "bg-green-700",
      "rgb(22,101,52)": "bg-green-800",
      "rgb(20,83,45)": "bg-green-900",
      "rgb(5,46,22)": "bg-green-950",

      // EMERALD
      "rgb(236,253,245)": "bg-emerald-50",
      "rgb(209,250,229)": "bg-emerald-100",
      "rgb(167,243,208)": "bg-emerald-200",
      "rgb(110,231,183)": "bg-emerald-300",
      "rgb(52,211,153)": "bg-emerald-400",
      "rgb(16,185,129)": "bg-emerald-500",
      "rgb(5,150,105)": "bg-emerald-600",
      "rgb(4,120,87)": "bg-emerald-700",
      "rgb(6,95,70)": "bg-emerald-800",
      "rgb(6,78,59)": "bg-emerald-900",
      "rgb(2,44,34)": "bg-emerald-950",

      // TEAL
      "rgb(240,253,250)": "bg-teal-50",
      "rgb(204,251,241)": "bg-teal-100",
      "rgb(153,246,228)": "bg-teal-200",
      "rgb(94,234,212)": "bg-teal-300",
      "rgb(45,212,191)": "bg-teal-400",
      "rgb(20,184,166)": "bg-teal-500",
      "rgb(13,148,136)": "bg-teal-600",
      "rgb(15,118,110)": "bg-teal-700",
      "rgb(17,94,89)": "bg-teal-800",
      "rgb(19,78,74)": "bg-teal-900",
      "rgb(4,47,46)": "bg-teal-950",

      // CYAN
      "rgb(236,254,255)": "bg-cyan-50",
      "rgb(207,250,254)": "bg-cyan-100",
      "rgb(165,243,252)": "bg-cyan-200",
      "rgb(103,232,249)": "bg-cyan-300",
      "rgb(34,211,238)": "bg-cyan-400",
      "rgb(6,182,212)": "bg-cyan-500",
      "rgb(8,145,178)": "bg-cyan-600",
      "rgb(14,116,144)": "bg-cyan-700",
      "rgb(21,94,117)": "bg-cyan-800",
      "rgb(22,78,99)": "bg-cyan-900",
      "rgb(8,51,68)": "bg-cyan-950",

      // SKY
      "rgb(240,249,255)": "bg-sky-50",
      "rgb(224,242,254)": "bg-sky-100",
      "rgb(186,230,253)": "bg-sky-200",
      "rgb(125,211,252)": "bg-sky-300",
      "rgb(56,189,248)": "bg-sky-400",
      "rgb(14,165,233)": "bg-sky-500",
      "rgb(2,132,199)": "bg-sky-600",
      "rgb(3,105,161)": "bg-sky-700",
      "rgb(7,89,133)": "bg-sky-800",
      "rgb(12,74,110)": "bg-sky-900",
      "rgb(8,47,73)": "bg-sky-950",

      // BLUE
      "rgb(239,246,255)": "bg-blue-50",
      "rgb(219,234,254)": "bg-blue-100",
      "rgb(191,219,254)": "bg-blue-200",
      "rgb(147,197,253)": "bg-blue-300",
      "rgb(96,165,250)": "bg-blue-400",
      "rgb(59,130,246)": "bg-blue-500",
      "rgb(37,99,235)": "bg-blue-600",
      "rgb(29,78,216)": "bg-blue-700",
      "rgb(30,64,175)": "bg-blue-800",
      "rgb(30,58,138)": "bg-blue-900",
      "rgb(23,37,84)": "bg-blue-950",

      // INDIGO
      "rgb(238,242,255)": "bg-indigo-50",
      "rgb(224,231,255)": "bg-indigo-100",
      "rgb(199,210,254)": "bg-indigo-200",
      "rgb(165,180,252)": "bg-indigo-300",
      "rgb(129,140,248)": "bg-indigo-400",
      "rgb(99,102,241)": "bg-indigo-500",
      "rgb(79,70,229)": "bg-indigo-600",
      "rgb(67,56,202)": "bg-indigo-700",
      "rgb(55,48,163)": "bg-indigo-800",
      "rgb(49,46,129)": "bg-indigo-900",
      "rgb(30,27,75)": "bg-indigo-950",

      // VIOLET
      "rgb(245,243,255)": "bg-violet-50",
      "rgb(237,233,254)": "bg-violet-100",
      "rgb(221,214,254)": "bg-violet-200",
      "rgb(196,181,253)": "bg-violet-300",
      "rgb(167,139,250)": "bg-violet-400",
      "rgb(139,92,246)": "bg-violet-500",
      "rgb(124,58,237)": "bg-violet-600",
      "rgb(109,40,217)": "bg-violet-700",
      "rgb(91,33,182)": "bg-violet-800",
      "rgb(76,29,149)": "bg-violet-900",
      "rgb(46,16,101)": "bg-violet-950",

      // PURPLE
      "rgb(250,245,255)": "bg-purple-50",
      "rgb(243,232,255)": "bg-purple-100",
      "rgb(233,213,255)": "bg-purple-200",
      "rgb(216,180,254)": "bg-purple-300",
      "rgb(192,132,252)": "bg-purple-400",
      "rgb(168,85,247)": "bg-purple-500",
      "rgb(147,51,234)": "bg-purple-600",
      "rgb(126,34,206)": "bg-purple-700",
      "rgb(107,33,168)": "bg-purple-800",
      "rgb(88,28,135)": "bg-purple-900",
      "rgb(59,7,100)": "bg-purple-950",

      // FUCHSIA
      "rgb(253,244,255)": "bg-fuchsia-50",
      "rgb(250,232,255)": "bg-fuchsia-100",
      "rgb(245,208,254)": "bg-fuchsia-200",
      "rgb(240,171,252)": "bg-fuchsia-300",
      "rgb(232,121,249)": "bg-fuchsia-400",
      "rgb(217,70,239)": "bg-fuchsia-500",
      "rgb(192,38,211)": "bg-fuchsia-600",
      "rgb(162,28,175)": "bg-fuchsia-700",
      "rgb(134,25,143)": "bg-fuchsia-800",
      "rgb(112,26,117)": "bg-fuchsia-900",
      "rgb(74,4,78)": "bg-fuchsia-950",

      // PINK
      "rgb(253,242,248)": "bg-pink-50",
      "rgb(252,231,243)": "bg-pink-100",
      "rgb(251,207,232)": "bg-pink-200",
      "rgb(249,168,212)": "bg-pink-300",
      "rgb(244,114,182)": "bg-pink-400",
      "rgb(236,72,153)": "bg-pink-500",
      "rgb(219,39,119)": "bg-pink-600",
      "rgb(190,24,93)": "bg-pink-700",
      "rgb(157,23,77)": "bg-pink-800",
      "rgb(131,24,67)": "bg-pink-900",
      "rgb(80,7,36)": "bg-pink-950",

      // ROSE
      "rgb(255,241,242)": "bg-rose-50",
      "rgb(255,228,230)": "bg-rose-100",
      "rgb(254,205,211)": "bg-rose-200",
      "rgb(253,164,175)": "bg-rose-300",
      "rgb(251,113,133)": "bg-rose-400",
      "rgb(244,63,94)": "bg-rose-500",
      "rgb(225,29,72)": "bg-rose-600",
      "rgb(190,18,60)": "bg-rose-700",
      "rgb(159,18,57)": "bg-rose-800",
      "rgb(136,19,55)": "bg-rose-900",
      "rgb(76,5,25)": "bg-rose-950",
      
    };
    if (typeof general_styles.backgroundColor === 'string'){
      tailwindStyles.backgroundColor = backgroundColorMapping[backgroundColor] || "bg-["+backgroundColor+"]";
    }
  }

  // Convert backgroundColor to Tailwind class
  if (general_styles.textColor){
    const textColor = general_styles.textColor.replace(/\s/g, ''); // remove all white spaces present in the string
    const textColorMapping: {[textColor: string]: string} = {
      "transparent": "text-transparent",
      "none": "text-transparent",
      "rgba(0,0,0,0)": "text-transparent",
      "rgb(0,0,0)": "text-black",
      "rgb(255,255,255)": "text-white",

      // SLATE
      "rgb(248,250,252)": "text-slate-50",
      "rgb(241,245,249)": "text-slate-100",
      "rgb(226,232,240)": "text-slate-200",
      "rgb(203,213,225)": "text-slate-300",
      "rgb(148,163,184)": "text-slate-400",
      "rgb(100,116,139)": "text-slate-500",
      "rgb(71,85,105)": "text-slate-600",
      "rgb(51,65,85)": "text-slate-700",
      "rgb(30,41,59)": "text-slate-800",
      "rgb(15,23,42)": "text-slate-900",
      "rgb(2,6,23)": "text-slate-950",

      // GRAY
      "rgb(249,250,251)": "text-gray-50",
      "rgb(243,244,246)": "text-gray-100",
      "rgb(229,231,235)": "text-gray-200",
      "rgb(209,213,219)": "text-gray-300",
      "rgb(156,163,175)": "text-gray-400",
      "rgb(107,114,128)": "text-gray-500",
      "rgb(75,85,99)": "text-gray-600",
      "rgb(55,65,81)": "text-gray-700",
      "rgb(31,41,55)": "text-gray-800",
      "rgb(17,24,39)": "text-gray-900",
      "rgb(3,7,18)": "text-gray-950",

      // ZINC
      "rgb(250,250,250)": "text-zinc-50",
      "rgb(244,244,245)": "text-zinc-100",
      "rgb(228,228,231)": "text-zinc-200",
      "rgb(212,212,216)": "text-zinc-300",
      "rgb(161,161,170)": "text-zinc-400",
      "rgb(113,113,122)": "text-zinc-500",
      "rgb(82,82,91)": "text-zinc-600",
      "rgb(63,63,70)": "text-zinc-700",
      "rgb(39,39,42)": "text-zinc-800",
      "rgb(24,24,27)": "text-zinc-900",
      "rgb(9,9,11)": "text-zinc-950",

      // NEUTRAL
      "rgb(245,245,245)": "text-neutral-100",
      "rgb(229,229,229)": "text-neutral-200",
      "rgb(212,212,212)": "text-neutral-300",
      "rgb(163,163,163)": "text-neutral-400",
      "rgb(115,115,115)": "text-neutral-500",
      "rgb(82,82,82)": "text-neutral-600",
      "rgb(64,64,64)": "text-neutral-700",
      "rgb(38,38,38)": "text-neutral-800",
      "rgb(23,23,23)": "text-neutral-900",
      "rgb(10,10,10)": "text-neutral-950",

      // STONE
      "rgb(250,250,249)": "text-stone-50",
      "rgb(245,245,244)": "text-stone-100",
      "rgb(231,229,228)": "text-stone-200",
      "rgb(214,211,209)": "text-stone-300",
      "rgb(168,162,158)": "text-stone-400",
      "rgb(120,113,108)": "text-stone-500",
      "rgb(87,83,78)": "text-stone-600",
      "rgb(68,64,60)": "text-stone-700",
      "rgb(41,37,36)": "text-stone-800",
      "rgb(28,25,23)": "text-stone-900",
      "rgb(12,10,9)": "text-stone-950",

      // RED
      "rgb(254,242,242)": "text-red-50",
      "rgb(254,226,226)": "text-red-100",
      "rgb(254,202,202)": "text-red-200",
      "rgb(252,165,165)": "text-red-300",
      "rgb(248,113,113)": "text-red-400",
      "rgb(239,68,68)": "text-red-500",
      "rgb(220,38,38)": "text-red-600",
      "rgb(185,28,28)": "text-red-700",
      "rgb(153,27,27)": "text-red-800",
      "rgb(127,29,29)": "text-red-900",
      "rgb(69,10,10)": "text-red-950",

      //ORANGE
      "rgb(255,247,237)": "text-orange-50",
      "rgb(255,237,213)": "text-orange-100",
      "rgb(254,215,170)": "text-orange-200",
      "rgb(253,186,116)": "text-orange-300",
      "rgb(251,146,60)": "text-orange-400",
      "rgb(249,115,22)": "text-orange-500",
      "rgb(234,88,12)": "text-orange-600",
      "rgb(194,65,12)": "text-orange-700",
      "rgb(154,52,18)": "text-orange-800",
      "rgb(124,45,18)": "text-orange-900",
      "rgb(67,20,7)": "text-orange-950",

      // AMBER
      "rgb(255,251,235)": "text-amber-50",
      "rgb(254,243,199)": "text-amber-100",
      "rgb(253,230,138)": "text-amber-200",
      "rgb(252,211,77)": "text-amber-300",
      "rgb(251,191,36)": "text-amber-400",
      "rgb(245,158,11)": "text-amber-500",
      "rgb(217,119,6)": "text-amber-600",
      "rgb(180,83,9)": "text-amber-700",
      "rgb(146,64,14)": "text-amber-800",
      "rgb(120,53,15)": "text-amber-900",
      "rgb(69,26,3)": "text-amber-950",

      // YELLOW
      "rgb(254,252,232)": "text-yellow-50",
      "rgb(254,249,195)": "text-yellow-100",
      "rgb(254,240,138)": "text-yellow-200",
      "rgb(253,224,71)": "text-yellow-300",
      "rgb(250,204,21)": "text-yellow-400",
      "rgb(234,179,8)": "text-yellow-500",
      "rgb(202,138,4)": "text-yellow-600",
      "rgb(161,98,7)": "text-yellow-700",
      "rgb(133,77,14)": "text-yellow-800",
      "rgb(113,63,18)": "text-yellow-900",
      "rgb(66,32,6)": "text-yellow-950",

      // LIME
      "rgb(247,254,231)": "text-lime-50",
      "rgb(236,252,203)": "text-lime-100",
      "rgb(217,249,157)": "text-lime-200",
      "rgb(190,242,100)": "text-lime-300",
      "rgb(163,230,53)": "text-lime-400",
      "rgb(132,204,22)": "text-lime-500",
      "rgb(101,163,13)": "text-lime-600",
      "rgb(77,124,15)": "text-lime-700",
      "rgb(63,98,18)": "text-lime-800",
      "rgb(54,83,20)": "text-lime-900",
      "rgb(26,46,5)": "text-lime-950",

      // GREEN
      "rgb(240,253,244)": "text-green-50",
      "rgb(220,252,231)": "text-green-100",
      "rgb(187,247,208)": "text-green-200",
      "rgb(134,239,172)": "text-green-300",
      "rgb(74,222,128)": "text-green-400",
      "rgb(34,197,94)": "text-green-500",
      "rgb(22,163,74)": "text-green-600",
      "rgb(21,128,61)": "text-green-700",
      "rgb(22,101,52)": "text-green-800",
      "rgb(20,83,45)": "text-green-900",
      "rgb(5,46,22)": "text-green-950",

      // EMERALD
      "rgb(236,253,245)": "text-emerald-50",
      "rgb(209,250,229)": "text-emerald-100",
      "rgb(167,243,208)": "text-emerald-200",
      "rgb(110,231,183)": "text-emerald-300",
      "rgb(52,211,153)": "text-emerald-400",
      "rgb(16,185,129)": "text-emerald-500",
      "rgb(5,150,105)": "text-emerald-600",
      "rgb(4,120,87)": "text-emerald-700",
      "rgb(6,95,70)": "text-emerald-800",
      "rgb(6,78,59)": "text-emerald-900",
      "rgb(2,44,34)": "text-emerald-950",

      // TEAL
      "rgb(240,253,250)": "text-teal-50",
      "rgb(204,251,241)": "text-teal-100",
      "rgb(153,246,228)": "text-teal-200",
      "rgb(94,234,212)": "text-teal-300",
      "rgb(45,212,191)": "text-teal-400",
      "rgb(20,184,166)": "text-teal-500",
      "rgb(13,148,136)": "text-teal-600",
      "rgb(15,118,110)": "text-teal-700",
      "rgb(17,94,89)": "text-teal-800",
      "rgb(19,78,74)": "text-teal-900",
      "rgb(4,47,46)": "text-teal-950",

      // CYAN
      "rgb(236,254,255)": "text-cyan-50",
      "rgb(207,250,254)": "text-cyan-100",
      "rgb(165,243,252)": "text-cyan-200",
      "rgb(103,232,249)": "text-cyan-300",
      "rgb(34,211,238)": "text-cyan-400",
      "rgb(6,182,212)": "text-cyan-500",
      "rgb(8,145,178)": "text-cyan-600",
      "rgb(14,116,144)": "text-cyan-700",
      "rgb(21,94,117)": "text-cyan-800",
      "rgb(22,78,99)": "text-cyan-900",
      "rgb(8,51,68)": "text-cyan-950",

      // SKY
      "rgb(240,249,255)": "text-sky-50",
      "rgb(224,242,254)": "text-sky-100",
      "rgb(186,230,253)": "text-sky-200",
      "rgb(125,211,252)": "text-sky-300",
      "rgb(56,189,248)": "text-sky-400",
      "rgb(14,165,233)": "text-sky-500",
      "rgb(2,132,199)": "text-sky-600",
      "rgb(3,105,161)": "text-sky-700",
      "rgb(7,89,133)": "text-sky-800",
      "rgb(12,74,110)": "text-sky-900",
      "rgb(8,47,73)": "text-sky-950",

      // BLUE
      "rgb(239,246,255)": "text-blue-50",
      "rgb(219,234,254)": "text-blue-100",
      "rgb(191,219,254)": "text-blue-200",
      "rgb(147,197,253)": "text-blue-300",
      "rgb(96,165,250)": "text-blue-400",
      "rgb(59,130,246)": "text-blue-500",
      "rgb(37,99,235)": "text-blue-600",
      "rgb(29,78,216)": "text-blue-700",
      "rgb(30,64,175)": "text-blue-800",
      "rgb(30,58,138)": "text-blue-900",
      "rgb(23,37,84)": "text-blue-950",

      // INDIGO
      "rgb(238,242,255)": "text-indigo-50",
      "rgb(224,231,255)": "text-indigo-100",
      "rgb(199,210,254)": "text-indigo-200",
      "rgb(165,180,252)": "text-indigo-300",
      "rgb(129,140,248)": "text-indigo-400",
      "rgb(99,102,241)": "text-indigo-500",
      "rgb(79,70,229)": "text-indigo-600",
      "rgb(67,56,202)": "text-indigo-700",
      "rgb(55,48,163)": "text-indigo-800",
      "rgb(49,46,129)": "text-indigo-900",
      "rgb(30,27,75)": "text-indigo-950",

      // VIOLET
      "rgb(245,243,255)": "text-violet-50",
      "rgb(237,233,254)": "text-violet-100",
      "rgb(221,214,254)": "text-violet-200",
      "rgb(196,181,253)": "text-violet-300",
      "rgb(167,139,250)": "text-violet-400",
      "rgb(139,92,246)": "text-violet-500",
      "rgb(124,58,237)": "text-violet-600",
      "rgb(109,40,217)": "text-violet-700",
      "rgb(91,33,182)": "text-violet-800",
      "rgb(76,29,149)": "text-violet-900",
      "rgb(46,16,101)": "text-violet-950",

      // PURPLE
      "rgb(250,245,255)": "text-purple-50",
      "rgb(243,232,255)": "text-purple-100",
      "rgb(233,213,255)": "text-purple-200",
      "rgb(216,180,254)": "text-purple-300",
      "rgb(192,132,252)": "text-purple-400",
      "rgb(168,85,247)": "text-purple-500",
      "rgb(147,51,234)": "text-purple-600",
      "rgb(126,34,206)": "text-purple-700",
      "rgb(107,33,168)": "text-purple-800",
      "rgb(88,28,135)": "text-purple-900",
      "rgb(59,7,100)": "text-purple-950",

      // FUCHSIA
      "rgb(253,244,255)": "text-fuchsia-50",
      "rgb(250,232,255)": "text-fuchsia-100",
      "rgb(245,208,254)": "text-fuchsia-200",
      "rgb(240,171,252)": "text-fuchsia-300",
      "rgb(232,121,249)": "text-fuchsia-400",
      "rgb(217,70,239)": "text-fuchsia-500",
      "rgb(192,38,211)": "text-fuchsia-600",
      "rgb(162,28,175)": "text-fuchsia-700",
      "rgb(134,25,143)": "text-fuchsia-800",
      "rgb(112,26,117)": "text-fuchsia-900",
      "rgb(74,4,78)": "text-fuchsia-950",

      // PINK
      "rgb(253,242,248)": "text-pink-50",
      "rgb(252,231,243)": "text-pink-100",
      "rgb(251,207,232)": "text-pink-200",
      "rgb(249,168,212)": "text-pink-300",
      "rgb(244,114,182)": "text-pink-400",
      "rgb(236,72,153)": "text-pink-500",
      "rgb(219,39,119)": "text-pink-600",
      "rgb(190,24,93)": "text-pink-700",
      "rgb(157,23,77)": "text-pink-800",
      "rgb(131,24,67)": "text-pink-900",
      "rgb(80,7,36)": "text-pink-950",

      // ROSE
      "rgb(255,241,242)": "text-rose-50",
      "rgb(255,228,230)": "text-rose-100",
      "rgb(254,205,211)": "text-rose-200",
      "rgb(253,164,175)": "text-rose-300",
      "rgb(251,113,133)": "text-rose-400",
      "rgb(244,63,94)": "text-rose-500",
      "rgb(225,29,72)": "text-rose-600",
      "rgb(190,18,60)": "text-rose-700",
      "rgb(159,18,57)": "text-rose-800",
      "rgb(136,19,55)": "text-rose-900",
      "rgb(76,5,25)": "text-rose-950",
      
    };
    if (typeof general_styles.textColor === 'string'){
      tailwindStyles.textColor = textColorMapping[textColor] || "text-["+textColor+"]";
    }
  }

  return tailwindStyles;
};

// const general_styles = {fontSize : "24px", fontWeight: 100, fontStyle: 'normal',  textDecoration: "none", backgroundColor: "rgb(0,0,0)", color: "rgb(255,247,237)"};
// const result = convertStylesToTailwind (general_styles);
// console.log("\n result : ", result);