export const transitions = [
  {
    slug: 'default',
    name: 'Fade in(Default)',
    className: 'default',
    type: 'page',
    image: '🥷',
    styles: `
    .default {
      view-transition-name: default-transition;
    }
    
    ::view-transition-old(default-transition) {
      animation-duration: <% timer /%>;
    }
    
    ::view-transition-new(default-transition) {
      animation-duration: <% timer /%>;
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
      animation: slide-to-left <% timer /%> ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-right-transition) {
      animation: slide-from-right <% timer /%> ease-in-out 1 forwards;
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
    type: 'page',
    image: '👈',
    styles: `
    .slideToLeft {
      view-transition-name: slide-to-left-transition;
    }
    
    ::view-transition-old(slide-to-left-transition) {
      animation: slide-to-right <% timer /%> ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-left-transition) {
      animation: slide-from-left <% timer /%> ease-in-out 1 forwards;
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
    type: 'page',
    image: '🔍',
    styles: `
    .zoom {
      view-transition-name: zoom-transition;
    }
    
    ::view-transition-old(zoom-transition) {
      animation-duration: <% timer /%>;
    }
    
    ::view-transition-new(zoom-transition) {
      animation: zoom-in <% timer /%> ease-in-out 1 forwards;
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
    type: 'page',
    styles: `
    .slideToDown {
      view-transition-name: slide-to-down-transition;
    }
    
    ::view-transition-old(slide-to-down-transition) {
      animation: slide-to-up <% timer /%> ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-down-transition) {
      animation: slide-from-up <% timer /%> ease-in-out 1 forwards;
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
    type: 'page',
    image: '👆',
    styles: `
    .slideToUp {
      view-transition-name: slide-to-up-transition;
    }
    
    ::view-transition-old(slide-to-up-transition) {
      animation: slide-to-down <% timer /%> ease-in-out 1 forwards;
    }
    
    ::view-transition-new(slide-to-up-transition) {
      animation: slide-from-up <% timer /%> ease-in-out 1 forwards;
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
  },
  {
    slug: 'horizontal-rotation',
    name: 'Horizontal Rotation',
    animationName: 'horizontalRotation',
    type: 'page',
    image: '🔁',
    styles: `
    .horizontalRotation {
      view-transition-name: horizontal-rotation-transition;
    }
    
    ::view-transition-old(horizontal-rotation-transition) {
      backface-visibility: hidden; 
      animation: rotate-horizontal-to-back <% timer /%> ease-in-out 1 forwards;
    }
    
    ::view-transition-new(horizontal-rotation-transition) {
      backface-visibility: hidden; 
      animation: rotate-horizontal-from-back <% timer /%> ease-in-out 1 forwards;
    }

    @keyframes rotate-horizontal-to-back {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(180deg);
      }
    }
    
    @keyframes rotate-horizontal-from-back {
      from {
        transform: rotateY(-180deg);
      }
      to {
        transform: rotateY(0deg);
      }
    }
    `
  },
  {
    slug: 'vertical-rotation',
    name: 'Vertical Rotation',
    animationName: 'verticalRotation',
    type: 'page',
    image: '🔃',
    styles: `
    .verticalRotation {
      view-transition-name: vertical-rotation-transition;
    }
    
    ::view-transition-old(vertical-rotation-transition) {
      backface-visibility: hidden; 
      animation: rotate-vertical-to-back <% timer /%> ease-in-out 1 forwards;
    }
    
    ::view-transition-new(vertical-rotation-transition) {
      backface-visibility: hidden; 
      animation: rotate-vertical-from-back <% timer /%> ease-in-out 1 forwards;
    }

    @keyframes rotate-vertical-to-back {
      from {
        transform: rotateX(0deg);
      }
      to {
        transform: rotateX(180deg);
      }
    }
    
    @keyframes rotate-vertical-from-back {
      from {
        transform: rotateX(-180deg);
      }
      to {
        transform: rotateX(0deg);
      }
    }
    `
  },
]