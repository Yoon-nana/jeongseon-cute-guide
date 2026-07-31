const pages = [...document.querySelectorAll('[data-page]')];
const navButtons = [...document.querySelectorAll('[data-go]')];
const player = document.querySelector('#arirangPlayer');

const placeData = [
  { kind: 'nature', tag: '🌿 자연', name: '동강', image: 'donggang.jpg', text: '산 사이를 굽이굽이 흐르는 강이에요. 물과 절벽이 어우러져 멋진 풍경을 만들어요.' },
  { kind: 'nature', tag: '🌿 자연', name: '백석폭포', image: 'waterfall.jpg', text: '높은 곳에서 시원하게 떨어지는 폭포예요. 계절마다 다른 모습을 보여 줘요.' },
  { kind: 'nature', tag: '🌿 자연', name: '가리왕산과 케이블카', image: 'gariwangsan.jpg', text: '높고 울창한 산의 풍경을 케이블카에서도 만날 수 있어요.' },
  { kind: 'nature', tag: '🌿 자연', name: '아우라지', image: 'auraji.jpg', text: '두 강물이 만나는 곳이에요. 정선아리랑 이야기의 배경이 된 곳이기도 해요.' },
  { kind: 'tradition', tag: '🧺 전통', name: '삼굿', image: 'samgut.png', text: '흙을 파고 감자나 옥수수를 익히던 옛 생활 모습이에요. 마을 사람들이 함께했어요.' },
  { kind: 'tradition', tag: '🧺 전통', name: '전통 뗏목', image: 'raft.jpg', text: '나무를 엮어 만든 뗏목은 예전 물길의 중요한 이동 수단이었어요.' },
  { kind: 'tradition', tag: '🧺 전통', name: '아우라지 전통 나룻배', image: 'ferry.jpg', text: '두 물길이 만나는 곳에서 사람과 물건을 건너게 했던 배예요.' },
  { kind: 'tradition', tag: '🧺 전통', name: '전통 섶다리', image: 'bridge.jpg', text: '나무와 섶으로 만든 임시 다리예요. 마을과 마을을 이어 주었어요.' },
  { kind: 'sight', tag: '🚠 명소', name: '정선아라리촌', image: 'ararichon.jpg', text: '굴피집과 너와집 같은 전통가옥을 살펴보며 옛 정선의 생활을 배워요.' },
  { kind: 'sight', tag: '🚠 명소', name: '화암동굴', image: 'cave.jpg', text: '금광의 흔적과 신기한 동굴 생성물을 함께 볼 수 있는 곳이에요.' },
  { kind: 'sight', tag: '🚠 명소', name: '정선5일장', image: 'market.jpg', text: '정선 사람들의 일상과 맛을 만나는 전통시장이에요. 장날에는 더욱 활기가 넘쳐요.' },
  { kind: 'sight', tag: '🚠 명소', name: '레일바이크', image: 'railbike.jpg', text: '옛 철길을 자전거처럼 달리며 산과 강을 구경해요.' },
  { kind: 'sight', tag: '🚠 명소', name: '스카이워크', image: 'skywalk.jpg', text: '유리 바닥 위에서 높은 곳의 경치를 내려다보는 전망대예요.' },
];

const storyChapters = [
  {
    label: '첫 번째 장',
    title: '산과 강이 만나는 마을',
    text: '높은 산과 굽이굽이 흐르는 강 사이에 정선의 마을들이 자리 잡았어요. 사람들은 산에서 먹거리를 찾고, 물길 곁에 모여 서로 도우며 하루를 살아갔답니다.',
    question: '생각해 봐요 · 산과 강 가까이에서 살면 어떤 소리가 들릴까요?',
    image: 'donggang.jpg',
  },
  {
    label: '두 번째 장',
    title: '두 물길의 약속, 아우라지',
    text: '아우라지는 두 강물이 한곳에서 어우러지는 곳이에요. 예전에는 나룻배와 뗏목이 사람과 물건을 실어 나르며 떨어진 마을과 마을을 이어 주었어요.',
    question: '찾아봐요 · 물 위를 건너는 옛날 방법은 무엇이었나요?',
    image: 'auraji.jpg',
  },
  {
    label: '세 번째 장',
    title: '함께 일하고 함께 노래해요',
    text: '집을 짓고, 먹을 것을 준비하고, 강을 건너는 일에는 이웃의 힘이 필요했어요. 함께 웃고 힘들어하며 생긴 마음은 노래가 되어 정선아리랑으로 이어졌어요.',
    question: '말해 봐요 · 친구들과 힘을 모아 해 본 일은 무엇인가요?',
    image: 'samgut.png',
  },
  {
    label: '네 번째 장',
    title: '오늘도 이어지는 정선 이야기',
    text: '정선아리랑제에서는 노래가 울리고, 정선5일장에는 사람들이 모여요. 아라리촌과 교육도서관에서는 옛 생활과 새로운 책을 만나며 정선의 이야기를 다음 세대에 전한답니다.',
    question: '골라 봐요 · 내가 정선에서 가장 만나 보고 싶은 것은 무엇인가요?',
    image: 'market.jpg',
  },
];

const mascotMessages = [
  '정선아리랑은 정선 사람들의 마음을 담은 노래야!',
  '두 물길이 만나는 아우라지를 꼭 기억해 줘!',
  '도서관에서는 궁금한 만큼 책을 찾아볼 수 있어!',
  '화암동굴에는 신기한 동굴 생성물이 있대!',
  '정선5일장에는 산나물과 맛있는 먹거리가 가득해!',
];

let storyIndex = 0;
let mascotIndex = 0;

function showPage(id, updateHash = true) {
  const nextId = pages.some((page) => page.dataset.page === id) ? id : 'home';
  pages.forEach((page) => page.classList.toggle('is-active', page.dataset.page === nextId));
  document.querySelectorAll('.desktop-nav [data-go], .mobile-nav [data-go]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.go === nextId);
    if (button.dataset.go === nextId) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  if (nextId !== 'arirang' && player) player.pause();
  if (updateHash) history.pushState(null, '', nextId === 'home' ? location.pathname : `#${nextId}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.title = nextId === 'home' ? '정선이랑 놀러 가요!' : `${document.querySelector(`[data-page="${nextId}"] h1`)?.textContent.replace(/\s+/g, ' ').trim() || '정선 소개'} | 정선이랑`;
}

function renderPlaces(filter = 'all') {
  const grid = document.querySelector('#placeGrid');
  const items = filter === 'all' ? placeData : placeData.filter((place) => place.kind === filter);
  grid.innerHTML = items.map((place) => `
    <article class="place-card" data-kind="${place.kind}">
      <img src="assets/photos/${place.image}" alt="${place.name} 모습">
      <div class="place-card-body">
        <span class="place-card-tag">${place.tag}</span>
        <h2>${place.name}</h2>
        <p>${place.text}</p>
      </div>
    </article>
  `).join('');
}

function renderStory() {
  const chapter = storyChapters[storyIndex];
  document.querySelector('#chapterLabel').textContent = chapter.label;
  document.querySelector('#chapterTitle').textContent = chapter.title;
  document.querySelector('#chapterText').textContent = chapter.text;
  document.querySelector('#storyQuestion').textContent = chapter.question;
  document.querySelector('#storyVisual').style.backgroundImage = `linear-gradient(180deg, transparent 58%, rgba(32,53,42,.22)), url("assets/photos/${chapter.image}")`;
  document.querySelector('#storyPrev').disabled = storyIndex === 0;
  document.querySelector('#storyNext').disabled = storyIndex === storyChapters.length - 1;
  document.querySelector('#storyDots').innerHTML = storyChapters.map((item, index) => `
    <button class="story-dot ${index === storyIndex ? 'is-active' : ''}" type="button" data-story-index="${index}" aria-label="${item.label} 보기" ${index === storyIndex ? 'aria-current="step"' : ''}></button>
  `).join('');
  document.querySelectorAll('[data-story-index]').forEach((button) => button.addEventListener('click', () => {
    storyIndex = Number(button.dataset.storyIndex);
    renderStory();
  }));
}

function playTrack(button) {
  document.querySelectorAll('.track-button').forEach((item) => item.classList.toggle('is-active', item === button));
  document.querySelector('#trackTitle').textContent = button.dataset.title;
  player.pause();
  player.src = button.dataset.track;
  player.currentTime = 0;
  player.load();
  player.play().catch(() => {
    document.querySelector('#trackTitle').textContent = `${button.dataset.title} · 재생 버튼을 눌러요`;
  });
}

navButtons.forEach((button) => button.addEventListener('click', () => showPage(button.dataset.go)));

document.querySelector('#mascotButton').addEventListener('click', () => {
  mascotIndex = (mascotIndex + 1) % mascotMessages.length;
  document.querySelector('#mascotSpeech').textContent = mascotMessages[mascotIndex];
});

document.querySelectorAll('.track-button').forEach((button) => button.addEventListener('click', () => playTrack(button)));

document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
  renderPlaces(button.dataset.filter);
}));

document.querySelector('#storyPrev').addEventListener('click', () => {
  if (storyIndex > 0) storyIndex -= 1;
  renderStory();
});

document.querySelector('#storyNext').addEventListener('click', () => {
  if (storyIndex < storyChapters.length - 1) storyIndex += 1;
  renderStory();
});

window.addEventListener('popstate', () => showPage(location.hash.slice(1) || 'home', false));

renderPlaces();
renderStory();
showPage(location.hash.slice(1) || 'home', false);
