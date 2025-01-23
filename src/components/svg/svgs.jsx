import React from 'react';

const svgs = {
  'LS-logo': (
    <svg viewBox="0 0 19 18">
      <path
        d="M.248 17V.488H3.56V14h4.176v3H.248ZM13.398 17.192c-.672 0-1.408-.04-2.208-.12-.784-.064-1.48-.16-2.088-.288v-2.688c1.632.128 2.76.192 3.384.192.56 0 .984-.032 1.272-.096.288-.064.504-.176.648-.336a.903.903 0 0 0 .24-.528c.048-.24.072-.576.072-1.008 0-.592-.032-1.008-.096-1.248a.817.817 0 0 0-.408-.552c-.192-.128-.536-.24-1.032-.336l-2.256-.408c-.8-.144-1.352-.584-1.656-1.32-.304-.736-.456-1.8-.456-3.192 0-1.36.192-2.4.576-3.12.4-.72.944-1.208 1.632-1.464s1.56-.384 2.616-.384c.736 0 1.44.048 2.112.144.688.096 1.248.192 1.68.288v2.688a17.758 17.758 0 0 0-2.904-.216c-.576 0-1.024.024-1.344.072-.304.048-.528.136-.672.264a.861.861 0 0 0-.336.552c-.048.24-.072.592-.072 1.056 0 .496.024.856.072 1.08.064.224.168.384.312.48.144.096.392.176.744.24l2.112.384c.56.08 1.032.256 1.416.528.4.256.712.688.936 1.296.224.64.336 1.544.336 2.712 0 1.52-.184 2.664-.552 3.432-.368.768-.88 1.28-1.536 1.536-.64.24-1.488.36-2.544.36Z"
        fill="#fff"
      />
    </svg>
  ),
  'dots-logo': (
    <svg width="150" height="150" viewBox="0 0 150 150">
      <g fill="none" fillRule="evenodd">
        <rect width="150" height="150" fill="#FFF" rx="16" />
        <g fill="#343434" transform="translate(25 20)">
          <path
            fillRule="nonzero"
            d="M35.294 0c4.863 0 8.916 1.134 12.094 3.434 3.154 2.282 5.45 5.606 6.896 9.915 1.397 4.161 2.087 9.245 2.087 15.258 0 5.013-.431 9.288-1.304 12.833-.9 3.652-2.305 6.625-4.242 8.905a16.356 16.356 0 0 1-3.74 3.247l-.389.238.21.11a16.183 16.183 0 0 1 4.258 3.305l.274.308c2.041 2.353 3.477 5.42 4.331 9.178C56.593 70.355 57 74.763 57 79.963c0 4.306-.334 8.246-1.005 11.823-.688 3.666-1.828 6.83-3.43 9.488a17.431 17.431 0 0 1-6.747 6.435c-2.845 1.538-6.34 2.291-10.464 2.291H0V0h35.294ZM21 92.321h9.046c2.144 0 3.748-.356 4.832-1.014 1-.606 1.761-1.69 2.261-3.343.567-1.874.861-4.469.861-7.762 0-3.734-.257-6.561-.751-8.445-.42-1.6-1.098-2.583-1.998-3.079-1.061-.583-2.802-.91-5.205-.91H21V92.32Zm0-49.107h9.046c2.144 0 3.748-.356 4.832-1.014 1-.606 1.761-1.69 2.261-3.343.567-1.874.861-4.47.861-7.762 0-3.734-.257-6.561-.751-8.445-.42-1.6-1.098-2.584-1.998-3.079-1.061-.583-2.802-.91-5.205-.91H21v24.553Z"
          />
          <circle cx="85.434" cy="15.651" r="15.349" />
          <circle cx="85.434" cy="55.298" r="15.349" />
          <circle cx="85.434" cy="94.946" r="15.349" />
        </g>
      </g>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 103 103">
      <g fillRule="nonzero">
        <path d="M55.814 21c2.73 0 5.006.639 6.79 1.934 1.77 1.286 3.06 3.158 3.871 5.585.785 2.344 1.172 5.207 1.172 8.594 0 2.823-.242 5.231-.732 7.228-.505 2.057-1.294 3.732-2.382 5.016a9.191 9.191 0 0 1-2.1 1.829l-.218.134.118.062a9.09 9.09 0 0 1 2.39 1.861l.155.174c1.145 1.325 1.951 3.052 2.431 5.17.462 2.04.691 4.523.691 7.452 0 2.425-.188 4.645-.564 6.66-.387 2.064-1.026 3.847-1.925 5.344a9.8 9.8 0 0 1-3.789 3.624c-1.597.866-3.56 1.29-5.874 1.29H36V21h19.814Zm-8.24 51.745h5.073c1.202 0 2.101-.198 2.709-.563.56-.336.987-.937 1.268-1.854.318-1.04.482-2.478.482-4.305 0-2.07-.144-3.638-.42-4.683-.236-.887-.616-1.433-1.12-1.707-.596-.324-1.572-.505-2.92-.505h-5.072v13.617Zm0-27.234h5.073c1.202 0 2.101-.198 2.709-.563.56-.336.987-.937 1.268-1.854.318-1.04.482-2.478.482-4.305 0-2.07-.144-3.638-.42-4.683-.236-.887-.616-1.433-1.12-1.707-.596-.324-1.572-.505-2.92-.505h-5.072V45.51Z" />
        <path d="M51.5 0C79.943 0 103 23.057 103 51.5S79.943 103 51.5 103 0 79.943 0 51.5 23.057 0 51.5 0Zm0 10C28.58 10 10 28.58 10 51.5S28.58 93 51.5 93 93 74.42 93 51.5 74.42 10 51.5 10Z" />
      </g>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 100 100">
      <path
        d="M90 0c5.43 0 9.848 4.327 9.996 9.72L100 10v80c0 5.407-4.349 9.847-9.721 9.996L90 100H10c-5.43 0-9.848-4.327-9.996-9.72L0 90V10C0 4.57 4.327.152 9.72.004L10 0h80Zm0 20H10v70h80V20ZM60.987 37a4.98 4.98 0 0 1 3.525 1.462l12.95 12.95a4.98 4.98 0 0 1 0 7.05l-12.95 12.95a4.985 4.985 0 1 1-7.05-7.05l9.4-9.45-9.4-9.4a4.98 4.98 0 0 1 0-7.05A4.98 4.98 0 0 1 60.987 37Zm-22.05 0a4.98 4.98 0 0 1 3.525 1.462 4.98 4.98 0 0 1 .182 6.859l-.182.191-9.4 9.4 9.4 9.45a4.985 4.985 0 0 1-6.874 7.217l-.175-.167-12.95-12.95a4.98 4.98 0 0 1-.172-6.87l.172-.18 12.95-12.95A4.98 4.98 0 0 1 38.938 37Z"
        fillRule="nonzero"
      />
    </svg>
  ),
  paint: (
    <svg viewBox="0 0 24 24">
      <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41z" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 94 87">
      <path
        d="M82.25 0c5.912 0 10.758 4.75 10.913 10.627l.004.29v53.5c0 5.911-4.751 10.758-10.627 10.913l-.29.003H20.664l-9.626 9.669C7.078 88.96.372 86.322.015 80.879l-.011-.228L0 80.422V10.917C0 5.005 4.75.159 10.627.004l.29-.004H82.25ZM81 11H13a2 2 0 0 0-2 2v49a2 2 0 0 0 2 2h68a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2ZM27.5 31a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm20 0a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm20 0a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z"
        fill="#000"
        fillRule="nonzero"
      />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 45.16 45.16">
      <path d="M22.58 11.269c-6.237 0-11.311 5.075-11.311 11.312s5.074 11.312 11.311 11.312c6.236 0 11.311-5.074 11.311-11.312S28.816 11.269 22.58 11.269zM22.58 7.944a2.207 2.207 0 01-2.207-2.206V2.207a2.207 2.207 0 114.414 0v3.531a2.207 2.207 0 01-2.207 2.206zM22.58 37.215a2.207 2.207 0 00-2.207 2.207v3.53a2.207 2.207 0 104.414 0v-3.53a2.208 2.208 0 00-2.207-2.207zM32.928 12.231a2.208 2.208 0 010-3.121l2.497-2.497a2.207 2.207 0 113.121 3.121l-2.497 2.497a2.207 2.207 0 01-3.121 0zM12.231 32.93a2.205 2.205 0 00-3.121 0l-2.497 2.496a2.207 2.207 0 003.121 3.121l2.497-2.498a2.204 2.204 0 000-3.119zM37.215 22.58c0-1.219.988-2.207 2.207-2.207h3.531a2.207 2.207 0 110 4.413h-3.531a2.206 2.206 0 01-2.207-2.206zM7.944 22.58a2.207 2.207 0 00-2.207-2.207h-3.53a2.207 2.207 0 100 4.413h3.531a2.206 2.206 0 002.206-2.206zM32.928 32.93a2.208 2.208 0 013.121 0l2.497 2.497a2.205 2.205 0 11-3.121 3.12l-2.497-2.497a2.205 2.205 0 010-3.12zM12.231 12.231a2.207 2.207 0 000-3.121L9.734 6.614a2.207 2.207 0 00-3.121 3.12l2.497 2.497a2.205 2.205 0 003.121 0z" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 312.812 312.812">
      <path d="M305.2 178.159c-3.2-.8-6.4 0-9.2 2-10.4 8.8-22.4 16-35.6 20.8-12.4 4.8-26 7.2-40.4 7.2-32.4 0-62-13.2-83.2-34.4-21.2-21.2-34.4-50.8-34.4-83.2 0-13.6 2.4-26.8 6.4-38.8 4.4-12.8 10.8-24.4 19.2-34.4 3.6-4.4 2.8-10.8-1.6-14.4-2.8-2-6-2.8-9.2-2-34 9.2-63.6 29.6-84.8 56.8-20.4 26.8-32.4 60-32.4 96 0 43.6 17.6 83.2 46.4 112s68 46.4 112 46.4c36.8 0 70.8-12.8 98-34 27.6-21.6 47.6-52.4 56-87.6 1.6-5.6-1.6-11.2-7.2-12.4z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 15 13">
      <path
        d="M14.044.86c-.552.34-1.163.59-1.816.722-.52-.578-1.263-.94-2.085-.94-1.577 0-2.857 1.333-2.857 2.976 0 .233.025.46.074.678-2.375-.125-4.48-1.308-5.89-3.11-.247.44-.387.953-.387 1.497 0 1.032.504 1.943 1.27 2.476-.467-.015-.908-.15-1.294-.37v.035c0 1.442.984 2.645 2.292 2.917-.24.07-.492.105-.753.105-.185 0-.364-.018-.538-.053.363 1.182 1.418 2.043 2.67 2.066-.98.798-2.212 1.274-3.55 1.274-.23 0-.46-.014-.682-.04 1.264.842 2.767 1.335 4.38 1.335 5.257 0 8.13-4.534 8.13-8.466 0-.13 0-.26-.006-.386.558-.42 1.043-.943 1.425-1.54-.513.237-1.064.397-1.642.468.59-.367 1.043-.95 1.256-1.645"
        fillRule="evenodd"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 15 15">
      <path
        d="M7.5 0C3.358 0 0 3.443 0 7.69c0 3.397 2.15 6.28 5.13 7.297.375.07.51-.167.51-.37 0-.183-.005-.667-.01-1.31-2.085.466-2.525-1.03-2.525-1.03-.34-.888-.833-1.124-.833-1.124-.68-.477.052-.468.052-.468.752.054 1.148.793 1.148.793.67 1.175 1.755.836 2.183.638.068-.497.262-.835.476-1.028-1.664-.194-3.415-.853-3.415-3.8 0-.84.292-1.526.772-2.064-.077-.194-.335-.976.073-2.035 0 0 .63-.207 2.063.788.598-.17 1.24-.256 1.877-.26.638.004 1.28.09 1.878.26 1.432-.995 2.06-.79 2.06-.79.41 1.06.152 1.842.075 2.036.48.538.77 1.224.77 2.064 0 2.954-1.753 3.604-3.423 3.795.27.237.51.706.51 1.424 0 1.028-.01 1.857-.01 2.11 0 .205.135.444.515.37C12.853 13.966 15 11.086 15 7.69 15 3.443 11.642 0 7.5 0"
        fillRule="evenodd"
      />
    </svg>
  ),
  codepen: (
    <svg width="15" height="15">
      <path
        d="M14.78 4.752L7.778.084a.5.5 0 0 0-.555 0L.222 4.752A.499.499 0 0 0 0 5.168v4.668c0 .167.084.323.222.416l7 4.668a.495.495 0 0 0 .555 0l7-4.668A.499.499 0 0 0 15 9.836V5.168a.49.49 0 0 0-.22-.416zM7.5 9.234L4.902 7.501l2.6-1.733 2.597 1.733-2.598 1.733zm.5-4.334V1.434l5.6 3.734L11 6.901l-3-2zm-1 0L4 6.901 1.4 5.168 7 1.434V4.9zM3.099 7.501l-2.1 1.4V6.1l2.1 1.4zM4 8.103l3 2v3.467L1.4 9.836 4 8.103zm4 2L11.002 8.1l2.6 1.733L8 13.568v-3.466zM11.904 7.5l2.099-1.4v2.8l-2.1-1.4z"
        fillRule="nonzero"
      />
    </svg>
  ),
  bluesky: (
    <svg viewBox="0 0 600 530">
      <path
        d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
        fill="#1185fe"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 15 14">
      <path
        d="M.378 4.373h2.924v9.263H.378V4.373zm10.912-.09c2.077 0 3.71 1.333 3.71 4.203v5.15h-3.315V8.843c0-1.255-.52-2.112-1.66-2.112-.87 0-1.356.58-1.582 1.136-.085.2-.072.48-.072.757v5.013H5.088s.042-8.49 0-9.263H8.37v1.454c.195-.636 1.245-1.543 2.92-1.543zM1.786 0c1.08 0 1.742.692 1.763 1.606 0 .898-.685 1.608-1.784 1.608h-.022C.686 3.214 0 2.506 0 1.608 0 .693.706 0 1.786 0z"
        fillRule="evenodd"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24">
      <path d="M8 3a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5H8zm10 2a1 1 0 110 2 1 1 0 010-2zm-6 2a5 5 0 11-.001 10.001A5 5 0 0112 7zm0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 103 103">
      <g fillRule="nonzero">
        <path d="M28.5 39.571c0 1.862.63 3.423 1.89 4.683 1.259 1.26 2.82 1.889 4.681 1.889 1.862 0 3.423-.63 4.683-1.89 1.26-1.259 1.889-2.82 1.889-4.682 0-1.861-.63-3.422-1.89-4.682C38.495 33.63 36.934 33 35.072 33c-1.861 0-3.422.63-4.682 1.89-1.26 1.259-1.889 2.82-1.889 4.681ZM61.357 39.571c0 1.862.63 3.423 1.89 4.683 1.259 1.26 2.82 1.889 4.682 1.889 1.861 0 3.422-.63 4.682-1.89 1.26-1.259 1.889-2.82 1.889-4.682 0-1.861-.63-3.422-1.89-4.682C71.352 33.63 69.79 33 67.93 33c-1.862 0-3.423.63-4.683 1.89-1.26 1.259-1.889 2.82-1.889 4.681ZM51.5 75.714c4.162 0 8.023-.985 11.582-2.957 3.56-1.971 6.435-4.655 8.625-8.05.657-1.205.63-2.41-.082-3.614-.712-1.205-1.78-1.807-3.204-1.807H34.58c-1.424 0-2.492.602-3.204 1.807-.712 1.205-.74 2.41-.082 3.614 2.19 3.395 5.065 6.079 8.625 8.05 3.56 1.972 7.42 2.957 11.582 2.957Z" />
        <path d="M51.5 0C79.943 0 103 23.057 103 51.5S79.943 103 51.5 103 0 79.943 0 51.5 23.057 0 51.5 0Zm0 10C28.58 10 10 28.58 10 51.5S28.58 93 51.5 93 93 74.42 93 51.5 74.42 10 51.5 10Z" />
      </g>
    </svg>
  ),
  X: (
    <svg viewBox="0 -960 960 960">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 21.825 21.825">
      <path d="M16.791 13.254a1.112 1.112 0 011.587 0 1.14 1.14 0 010 1.587l-6.65 6.651a1.14 1.14 0 01-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0110.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 20 20">
      <g fillRule="evenodd">
        <g fillRule="nonzero">
          <path d="M11.429 6c0 .076-.026.14-.079.193-.052.053-.115.08-.19.08H5.269c-.075 0-.138-.027-.19-.08C5.026 6.14 5 6.076 5 6v-.727c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h5.893c.074 0 .137.027.19.08.052.053.078.117.078.193V6zM5.268 9.182c-.075 0-.138-.027-.19-.08C5.026 9.05 5 8.985 5 8.91v-.727c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h9.464c.075 0 .138.027.19.08.052.053.078.117.078.193v.727c0 .076-.026.14-.078.193-.052.053-.115.08-.19.08H5.268zm0 5.818c-.075 0-.138-.027-.19-.08-.052-.053-.078-.117-.078-.193V14c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h9.464c.075 0 .138.027.19.08.052.053.078.117.078.193v.727c0 .076-.026.14-.078.193-.052.053-.115.08-.19.08H5.268zm5.893-4.182c.074 0 .137.027.19.08.052.053.078.117.078.193v.727c0 .076-.026.14-.079.193-.052.053-.115.08-.19.08H5.269c-.075 0-.138-.027-.19-.08-.052-.053-.078-.117-.078-.193v-.727c0-.076.026-.14.078-.193.052-.053.115-.08.19-.08h5.893z" />
        </g>
      </g>
    </svg>
  ),
};

export default svgs;
