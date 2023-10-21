export const transitions = [
  {
    slug: 'default',
    name: 'Fade in(Default)',
    className: 'default',
    color: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    image: '🥷',
    styles: `
    .default {
      view-transition-name: default-transition;
    }
    
    ::view-transition-old(default-transition) {
      animation-duration: 2s;
    }
    
    ::view-transition-new(default-transition) {
      animation-duration: 2s;
    }
    `
  },
  {
    slug: 'slide-to-right',
    name: 'Slide to right',
    animationName: 'slideToRight',
    color: 'bg-gradient-to-r from-sky-500 to-indigo-500',
    image: '👉',
    styles: `
    .slideToRight {
      view-transition-name: slide-to-right-transition;
    }
    
    ::view-transition-old(slide-to-right-transition) {
      animation: slide-to-left 2s ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-right-transition) {
      animation: slide-from-right 2s ease-in-out 1 forwards;
    }

    @keyframes slide-to-left {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }

    @keyframes slide-from-right {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }

    `
  },
  {
    slug: 'slide-to-left',
    name: 'Slide to left',
    animationName: 'slideToLeft',
    color: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
    image: '👈',
    styles: `
    .slideToLeft {
      view-transition-name: slide-to-left-transition;
    }
    
    ::view-transition-old(slide-to-left-transition) {
      animation: slide-to-right 2s ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-left-transition) {
      animation: slide-from-left 2s ease-in-out 1 forwards;
    }

    @keyframes slide-to-right {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }

    @keyframes slide-from-left {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
    `
  },
  {
    slug: 'zoom',
    name: 'Zoom',
    animationName: 'zoom',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    image: '🔍',
    styles: `
    .zoom {
      view-transition-name: zoom-transition;
    }
    
    ::view-transition-old(zoom-transition) {
      animation-duration: 2s;
    }
    
    ::view-transition-new(zoom-transition) {
      animation: zoom-in 2s ease-in-out 1 forwards;
    }

    @keyframes zoom-in {
      from {
        transform: scale(0);
      }
    }
    `
  },{
    slug: 'slide-to-down',
    name: 'Slide to down',
    animationName: 'slideToDown',
    image: '👇',
    styles: `
    .slideToDown {
      view-transition-name: slide-to-down-transition;
    }
    
    ::view-transition-old(slide-to-down-transition) {
      animation: slide-to-up 2s ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-down-transition) {
      animation: slide-from-up 2s ease-in-out 1 forwards;
    }

    @keyframes slide-to-up {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(100%);
      }
    }

    @keyframes slide-from-down {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
    `
  },
  {
    slug: 'slide-to-up',
    name: 'Slide to up',
    animationName: 'slideToUp',
    color: 'sky',
    image: '👆',
    styles: `
    .slideToUp {
      view-transition-name: slide-to-up-transition;
    }
    
    ::view-transition-old(slide-to-up-transition) {
      animation: slide-to-down 2s ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-up-transition) {
      animation: slide-from-up 2s ease-in-out 1 forwards;
    }

    @keyframes slide-to-down {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-100%);
      }
    }

    @keyframes slide-from-up {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
    `
  }
]