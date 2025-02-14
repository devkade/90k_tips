const researchData = {
    병사: [
      {
        id: 1,
        name: "장과",
        minLevel: 1,
        imageUrl: "/images/soldiers/dagger-axe.png",
        description: "기본적인 보병 부대입니다. 근접 전투에 특화되어 있습니다."
      },
      {
        id: 2,
        name: "장궁",
        minLevel: 1,
        imageUrl: "/images/soldiers/longbowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: 3,
        name: "쇠뇌",
        minLevel: 1,
        imageUrl: "/images/soldiers/crossbowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: 4,
        name: "독궁",
        minLevel: 1,
        imageUrl: "/images/soldiers/toxibowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: 5,
        name: "사냥꾼",
        minLevel: 1,
        imageUrl: "/images/soldiers/hunter.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: 6,
        name: "강화 쇠뇌",
        minLevel: 1,
        imageUrl: "/images/soldiers/imp-crossbowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: 7,
        name: "화궁",
        minLevel: 1,
        imageUrl: "/images/soldiers/firebowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
    ],
    정책: [
      {
        id: 1,
        name: "효율적인 보급",
        minLevel: 1,
        imageUrl: "/images/policies/efficient-supply.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 2,
        name: "고급 훈련",
        minLevel: 2,
        imageUrl: "/images/policies/advanced-training.png",
        description: "부대의 전투력을 15% 증가시킵니다."
      },
      // ... 더 많은 정책 아이템
    ],
    장비: [
      {
        id: 1,
        name: "기본 검",
        minLevel: 1,
        imageUrl: "/images/equipment/basic-sword.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비" // 일반 장비
      },
      {
        id: 2,
        name: "영웅의 검",
        minLevel: 5,
        imageUrl: "/images/equipment/hero-sword.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용" // 전용 장비
      },
      // ... 더 많은 장비 아이템
    ]
  };