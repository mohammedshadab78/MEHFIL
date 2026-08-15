/* ==================================================
   MEHFIL — Local Qawwali Archive
   Vanilla JS, no dependencies.
   ================================================== */

// ---------- SONG DATA ----------
// Add or edit songs by simply adding an object to the appropriate playlist array.
// Each song needs: id, title, artist, album, year, audio (relative path), cover (optional)
const playlists = {
    mehfil: [
         {
            id: 7,
            title: "Sanson Ki Malla Pe",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Ustad_Nusrat_Fateh_Ali_Khan_-_Sanson_Ki_Maala_Pe_(mp3.pm).mp3",
            cover: "assets/cover-07.jpg"
        },
        {  
            id: 4,
            title: "Sadgi To Hamari Zara Dekhiye",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Sadgi_To_Hamari_Zara_Dekhiye_(mp3.pm).mp3",
            cover: "assets/cover-03.jpg"
        },
        {
            id: 7,
            title: "Dillagi ",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Nusrat_Fateh_Ali_Khan_Svnni_-_Dillagi_(mp3.pm).mp3",
            cover: "assets/cover-07.jpg"
        },
         {
            id: 7,
            title: "Ye Jo Halka",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Yeh-Jo-Halka.mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 7,
            title: "Hai Kahaan Ka Irada Tumhara",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Hai-kahaan-ka-irada-tumhara-nusrat-fateh-ali-khan.mp3",
            cover: "assets/cover-07.jpg"
        },
         {
            id: 7,
            title: "Kaffara",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Kaffara-Dil-Ghalati-Kar-Baitha-Hai-Shahbaz-Fayyaz-Qawwal.mp3",
            cover: "assets/cover-07.jpg"
        },
         {
            id: 1,
            title: "Mere Rashke Qamar",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1992,
            audio: "audio/track-01.mp3",
            cover: "assets/cover-01.jpg"
        },
        {
            id: 7,
            title: "Pyaar Kisi Se Karke Dekho",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Pyar-Kisi-Se-Kar-Ke-Dekho-Nusrat-Fateh-Ali-Khan.mp3",
            cover: "assets/cover-07.jpg"
        },
         {
            id: 7,
            title: "Sakhi Teri Ankhain Salamt Rahain",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Saqi-Teri-Aankhain-Salamat-Rahain-Full-Ghazal-I-Ustad-Nusrat-Fateh-Ali-Khan.mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 2,
            title: "Dil Pe Zakham Khate Hain",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1993,
            audio: "audio/track-02.mp3",
            cover: "assets/cover-02.jpg"
        },
          {
            id: 6,
            title: "Aisa Banna Sawarna Mubarak",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Aisa_Banna_Sawarna_Mubarak_(mp3.pm).mp3",
            cover: "assets/cover-03.jpg"
        },
         {
            id: 5,
            title: "Doston Ki Shikayat",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Doston_Ki_Shikayat_(mp3.pm) (1).mp3",
            cover: "assets/cover-03.jpg"
        },
       
        {
            id: 4,
            title: "Akhiyan Udeek Diyan",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Akhiyan_Udeek_Diyan_(mp3.pm).mp3",
            cover: "assets/cover-03.jpg"
        },
        
        {
            id: 3,
            title: "Nit Khair Manga",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/track-03.mp3",
            cover: "assets/cover-03.jpg"
        },
        {
            id: 4,
            title: "Aaja Tenu Akhiyaan",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Aaja_Tenu_Akhiyaan_(mp3.pm).mp3",
            cover: "assets/cover-03.jpg"
        },
       {
            id: 4,
            title: "Gale Lipte Hain Woh Bijli Ke Dar Se",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Gale_Lipte_Hain_Woh_Bijli_Ke_Dar_Se_(mp3.pm).mp3",
            cover: "assets/cover-03.jpg"
        },
       {
            id: 4,
            title: "Tere Main Ishq Nachaiyan",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Tere_Main_Ishq_Nachaiyan_(mp3.pm).mp3",
            cover: "assets/cover-03.jpg"
        },
       {
            id: 4,
            title: "Shah-e-Mardan Ali",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat_Fateh_Ali_Khan_feat._DJ_Chino_-_Shah-e-Mardan_Ali_(mp3.pm).mp3",
            cover: "assets/cover-03.jpg"
        },
          {
            id: 4,
            title: "Mera Piya Ghar Aya",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Mera_Piya_Ghar_Aya_O_Laal_Ni.mp3",
            cover: "assets/cover-03.jpg"
        },
        {
            id: 4,
            title: "Tu Kuja Man Kuja",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Nusrat-Fateh-Ali-Khan-Tu-Kuja-Man-Kuja-Original-Full-Qawwali.mp3",
            cover: "assets/cover-03.jpg"
        },
        {
            id: 4,
            title: "Rabba Lakh Lakh Shukar Manaawa",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Rabba_Lakh_Lakh_Shukar_Manaawa.mp3",
            cover: "assets/cover-03.jpg"
        },
        {
            id: 4,
            title: "Sochta Hoon",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1994,
            audio: "audio/Sochta-Hoon-Ke-Woh-Kitne-Masoom-Thay-Nusrat-Fateh-Ali-Khan.mp3",
            cover: "assets/cover-03.jpg"
        },
        {
            id: 7,
            title: "Afreen-Afreen",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Afreen-Afreen-Live",
            cover: "assets/cover-07.jpg"
        },
      {
            id: 7,
            title: "Sanu Ek Pal",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/sanu-ek-pal.mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 7,
            title: "Tere Bin Nahin Lagda Dil",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Tere-Bin-Nahin-Lagda-Dil.mp3",
            cover: "assets/cover-07.jpg"
        },
         {
            id: 7,
            title: "Dil Tarapne Laga",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Dil-Tarapne-Laga-Ghazal-By-Nusrat-Fateh-Ali-Khan.mp3",
            cover: "assets/cover-07.jpg"
        },// Add more songs here...
        
         {
            id: 7,
            title: "Jaani Door Gye",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Jaani-Door-Gaye.mp3",
            cover: "assets/cover-07.jpg"
        },
         {
            id: 7,
            title: "Jhuule Laal",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/jhuule-laal.mp3",
            cover: "assets/cover-07.jpg"
        },
        
         {
            id: 7,
            title: "Aankh Uthi Mohabbat",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Aankh_uthi_mohabbat_(mp3.pm).mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 7,
            title: "Ali Da Malang",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Ali_da_malang_(mp3.pm).mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 7,
            title: "Gham Hai Ya Khushi Hai Tu",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Gham_Hai_Ya_Khushi_Hai_Tu_(mp3.pm).mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 7,
            title: "Mera Piya Ghar Aaya ",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Mera_piya_ghar_aaya_(mp3.pm).mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 7,
            title: "Sukh Mahi Naal Lai Gaya ",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Nusrat_Fateh_Ali_Khan_-_Sukh_Mahi_Naal_Lai_Gaya_(mp3.pm).mp3",
            cover: "assets/cover-07.jpg"
        },
        {
            id: 7,
            title: "Mast Nazron Se Allah Bachaye",
            artist: "Nusrat Fateh Ali Khan",
            album: "Album / Mehfil",
            year: 1996,
            audio: "audio/Nusrat-Fateh-Ali-Khan-Mast-Nazron-Se-Allah-Bachaye.mp3",
            cover: "assets/cover-07.jpg"
        },
        
        
    ],
    cassette: [
        {
            id: 4,
            title: "Cassette Track One",
            artist: "Different Artist",
            album: "Cassette / 1991",
            year: 1991,
            audio: "audio/track-04.mp3",
            cover: "assets/cover-04.jpg"
        },
        {
            id: 5,
            title: "Cassette Track Two",
            artist: "Another Voice",
            album: "Cassette / 1993",
            year: 1993,
            audio: "audio/track-05.mp3",
            cover: "assets/cover-05.jpg"
        },
    ],
    lateNight: [
        {
            id: 6,
            title: "Midnight Qawwali",
            artist: "Late Night Performer",
            album: "Late Night / 1995",
            year: 1995,
            audio: "audio/track-06.mp3",
            cover: "assets/cover-06.jpg"
        },
        {
            id: 7,
            title: "Last Verse",
            artist: "The Final Voice",
            album: "Late Night / 1996",
            year: 1996,
            audio: "audio/track-07.mp3",
            cover: "assets/cover-07.jpg"
        },
    ]
};

// Flatten the playlists for easy access if needed
const allSongs = Object.values(playlists).flat();

// ---------- DOM ELEMENTS ----------
const audio = document.getElementById('audio-element');
const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const trackMeta = document.getElementById('track-meta');
const timeCurrent = document.getElementById('time-current');
const timeDuration = document.getElementById('time-duration');
const seekBar = document.getElementById('seek-bar');
const seekProgress = document.getElementById('seek-progress');
const seekKnob = document.getElementById('seek-knob');
const volumeSlider = document.getElementById('volume-slider');
const volumeProgress = document.getElementById('volume-progress');
const volumeKnob = document.getElementById('volume-knob');
const btnVolume = document.getElementById('btn-volume');
const iconVolumeHigh = document.getElementById('icon-volume-high');
const iconVolumeLow = document.getElementById('icon-volume-low');
const vinyl = document.getElementById('vinyl');
const vinylLabelText = document.getElementById('vinyl-label-text');
const trackList = document.getElementById('track-list');
const trackCount = document.getElementById('track-count');
const playlistTabs = document.querySelectorAll('.playlist-tab');
const istClockHours = document.getElementById('ist-clock-hours');
const istClockMinutes = document.getElementById('ist-clock-minutes');
const istClockAmpm = document.getElementById('ist-clock-ampm');
const equalizer = document.getElementById('equalizer');

// ---------- STATE ----------
let currentPlaylist = 'mehfil';
let currentTrackIndex = 0;
let isPlaying = false;
let isSeeking = false;
let isVolumeSliding = false;
let lastVolume = 0.8; // Default volume

// ---------- UTILITY ----------
function getCurrentPlaylist() {
    return playlists[currentPlaylist];
}

function getCurrentTrack() {
    return getCurrentPlaylist()[currentTrackIndex];
}

function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function loadTrack(index, play = true) {
    const playlist = getCurrentPlaylist();
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[index];
    
    // Update audio src
    audio.src = track.audio;
    audio.load();
    
    // Update UI
    trackTitle.textContent = track.title;
    trackTitle.setAttribute('title', track.title);
    trackArtist.textContent = track.artist;
    trackMeta.textContent = `${track.album} • ${track.year}`;
    vinylLabelText.textContent = track.title.split(' ')[0] || 'MEHFIL';
    
    // Update track list highlight
    renderTrackList();
    
    // Save to localStorage
    localStorage.setItem('mehfil_playlist', currentPlaylist);
    localStorage.setItem('mehfil_track_index', index);
    
    if (play) {
        audio.play()
            .then(() => {
                isPlaying = true;
                updatePlayButton();
                vinyl.style.animationPlayState = 'running';
                equalizer.classList.add('is-active');
            })
            .catch(err => {
                console.log('Playback prevented:', err);
                isPlaying = false;
                updatePlayButton();
                vinyl.style.animationPlayState = 'paused';
                equalizer.classList.remove('is-active');
            });
    } else {
        // Just load, don't play
        isPlaying = false;
        updatePlayButton();
        vinyl.style.animationPlayState = 'paused';
        equalizer.classList.remove('is-active');
        // Set duration if known
        if (audio.duration) {
            timeDuration.textContent = formatTime(audio.duration);
        }
    }
}

function togglePlay() {
    if (!audio.src || audio.src === window.location.href) return;
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        vinyl.style.animationPlayState = 'paused';
        equalizer.classList.remove('is-active');
    } else {
        audio.play()
            .then(() => {
                isPlaying = true;
                vinyl.style.animationPlayState = 'running';
                equalizer.classList.add('is-active');
            })
            .catch(err => console.error(err));
    }
    updatePlayButton();
}

function updatePlayButton() {
    if (isPlaying) {
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else {
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    }
}

function nextTrack() {
    const playlist = getCurrentPlaylist();
    if (playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex, isPlaying); // continue playing if currently playing
}

function prevTrack() {
    const playlist = getCurrentPlaylist();
    if (playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex, isPlaying);
}

function updateSeekBar() {
    if (!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    seekProgress.style.width = `${percent}%`;
    seekKnob.style.left = `${percent}%`;
    timeCurrent.textContent = formatTime(audio.currentTime);
    timeDuration.textContent = formatTime(audio.duration);
    seekBar.setAttribute('aria-valuenow', percent.toFixed(2));
    seekBar.setAttribute('aria-valuetext', `${formatTime(audio.currentTime)} of ${formatTime(audio.duration)}`);
}

function setSeekFromPointer(clientX) {
    const rect = seekBar.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, ratio));
    audio.currentTime = clamped * (audio.duration || 0);
    updateSeekBar();
}

function updateVolumeUI() {
    const vol = audio.volume;
    volumeProgress.style.width = `${vol * 100}%`;
    volumeKnob.style.left = `${vol * 100}%`;
    volumeSlider.setAttribute('aria-valuenow', vol * 100);
    if (vol === 0) {
        iconVolumeHigh.style.display = 'none';
        iconVolumeLow.style.display = 'block';
    } else {
        iconVolumeHigh.style.display = 'block';
        iconVolumeLow.style.display = 'none';
    }
}

function setVolumeFromPointer(clientX) {
    const rect = volumeSlider.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, ratio));
    audio.volume = clamped;
    if (clamped > 0) lastVolume = clamped;
    updateVolumeUI();
    localStorage.setItem('mehfil_volume', clamped);
}

function toggleMute() {
    if (audio.volume > 0) {
        lastVolume = audio.volume;
        audio.volume = 0;
    } else {
        audio.volume = lastVolume || 0.8;
    }
    updateVolumeUI();
    localStorage.setItem('mehfil_volume', audio.volume);
}

function switchPlaylist(playlistName) {
    if (currentPlaylist === playlistName) return;
    currentPlaylist = playlistName;
    currentTrackIndex = 0;
    loadTrack(0, false); // load first track but don't autoplay
    // Update tab styles
    playlistTabs.forEach(tab => {
        const isActive = tab.dataset.playlist === playlistName;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive);
    });
    localStorage.setItem('mehfil_playlist', playlistName);
    localStorage.setItem('mehfil_track_index', 0);
    renderTrackList();
}

function renderTrackList() {
    const playlist = getCurrentPlaylist();
    trackList.innerHTML = '';
    trackCount.textContent = `${playlist.length} TRACK${playlist.length !== 1 ? 'S' : ''}`;
    playlist.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'track-item';
        item.classList.toggle('is-active', index === currentTrackIndex);
        item.setAttribute('role', 'option');
        item.setAttribute('aria-selected', index === currentTrackIndex);
        item.setAttribute('tabindex', '0');
        item.innerHTML = `
            <span class="track-item__number">${String(index + 1).padStart(2, '0')}</span>
            <div class="track-item__info">
                <div class="track-item__title">${track.title}</div>
                <div class="track-item__artist">${track.artist} • ${track.year}</div>
            </div>
        `;
        item.addEventListener('click', () => {
            loadTrack(index, true);
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadTrack(index, true);
            }
        });
        trackList.appendChild(item);
    });
}

// ---------- CLOCK (IST) ----------
function updateClock() {
    const now = new Date();
    const timeParts = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).formatToParts(now);
    const hours = timeParts.find(part => part.type === 'hour').value;
    const minutes = timeParts.find(part => part.type === 'minute').value;
    const ampm = timeParts.find(part => part.type === 'dayPeriod')?.value || '';
    istClockHours.textContent = hours;
    istClockMinutes.textContent = minutes;
    istClockAmpm.textContent = ampm;
}

// ---------- CANVAS PARTICLES (Drifting Embers) ----------
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animationId = null;
let reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticles() {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 18 : 30;
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2.5 + 0.8,
            speedY: Math.random() * 15 + 5,   // 5-20 px/sec upward
            swayAmp: Math.random() * 20 + 10,
            swayFreq: Math.random() * 0.5 + 0.2,
            phase: Math.random() * Math.PI * 2,
            alphaBase: Math.random() * 0.3 + 0.15,
            alphaFreq: Math.random() * 0.5 + 0.3,
        });
    }
}

function drawParticles(deltaTime) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const dt = deltaTime / 1000; // seconds

    particles.forEach(p => {
        // Update position
        p.y -= p.speedY * dt;
        p.x += Math.sin(p.phase + performance.now() * p.swayFreq * 0.001) * p.swayAmp * dt;
        p.phase += p.swayFreq * dt;

        // Respawn at bottom if off top
        if (p.y < -10) {
            p.y = canvas.height + 10;
            p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Alpha flicker using sine
        const alpha = p.alphaBase * (0.6 + 0.4 * Math.sin(performance.now() * p.alphaFreq * 0.001 + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,186,120,${alpha.toFixed(3)})`;
        ctx.fill();
    });
}

function particleLoop(timestamp) {
    if (reduceMotion) {
        drawParticles(0);
        return;
    }
    let lastTime = timestamp;
    function frame(now) {
        const delta = now - lastTime;
        lastTime = now;
        drawParticles(delta);
        animationId = requestAnimationFrame(frame);
    }
    animationId = requestAnimationFrame(frame);
}

// ---------- KEYBOARD CONTROLS ----------
function handleKeyboard(e) {
    // Ignore if typing in an input or textarea (none in this app, but safe)
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
        case ' ':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            audio.currentTime = Math.max(0, audio.currentTime - 5);
            updateSeekBar();
            break;
        case 'ArrowRight':
            e.preventDefault();
            audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
            updateSeekBar();
            break;
        case 'n':
        case 'N':
            nextTrack();
            break;
        case 'p':
        case 'P':
            prevTrack();
            break;
    }
}

// ---------- INITIALIZATION ----------
function init() {
    // Load saved state
    const savedPlaylist = localStorage.getItem('mehfil_playlist') || 'mehfil';
    const savedTrackIndex = parseInt(localStorage.getItem('mehfil_track_index') || '0', 10);
    const savedVolume = parseFloat(localStorage.getItem('mehfil_volume') || '0.8');

    currentPlaylist = savedPlaylist;
    currentTrackIndex = savedTrackIndex;
    audio.volume = savedVolume;

    // Set volume UI
    updateVolumeUI();

    // Set active playlist tab
    playlistTabs.forEach(tab => {
        const isActive = tab.dataset.playlist === currentPlaylist;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive);
    });

    // Load first track (without autoplay)
    loadTrack(currentTrackIndex, false);

    // Event listeners
    audio.addEventListener('loadedmetadata', () => {
        timeDuration.textContent = formatTime(audio.duration);
        updateSeekBar();
    });

    audio.addEventListener('timeupdate', updateSeekBar);
    audio.addEventListener('ended', () => {
        // Auto-advance to next track
        nextTrack();
    });

    audio.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButton();
        vinyl.style.animationPlayState = 'running';
        equalizer.classList.add('is-active');
    });

    audio.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButton();
        vinyl.style.animationPlayState = 'paused';
        equalizer.classList.remove('is-active');
    });

    btnPlay.addEventListener('click', togglePlay);
    btnNext.addEventListener('click', nextTrack);
    btnPrev.addEventListener('click', prevTrack);
    btnVolume.addEventListener('click', toggleMute);

    // Seek bar pointer events
    seekBar.addEventListener('pointerdown', (e) => {
        isSeeking = true;
        seekBar.setPointerCapture(e.pointerId);
        setSeekFromPointer(e.clientX);
    });

    seekBar.addEventListener('pointermove', (e) => {
        if (isSeeking) {
            setSeekFromPointer(e.clientX);
        }
    });

    seekBar.addEventListener('pointerup', (e) => {
        isSeeking = false;
        seekBar.releasePointerCapture(e.pointerId);
    });

    seekBar.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            audio.currentTime = Math.max(0, audio.currentTime - 1);
            updateSeekBar();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 1);
            updateSeekBar();
        }
    });

    // Volume slider pointer events
    volumeSlider.addEventListener('pointerdown', (e) => {
        isVolumeSliding = true;
        volumeSlider.setPointerCapture(e.pointerId);
        setVolumeFromPointer(e.clientX);
    });

    volumeSlider.addEventListener('pointermove', (e) => {
        if (isVolumeSliding) {
            setVolumeFromPointer(e.clientX);
        }
    });

    volumeSlider.addEventListener('pointerup', (e) => {
        isVolumeSliding = false;
        volumeSlider.releasePointerCapture(e.pointerId);
    });

    volumeSlider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            audio.volume = Math.max(0, audio.volume - 0.05);
            updateVolumeUI();
            localStorage.setItem('mehfil_volume', audio.volume);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            audio.volume = Math.min(1, audio.volume + 0.05);
            updateVolumeUI();
            localStorage.setItem('mehfil_volume', audio.volume);
        }
    });

    // Playlist tab listeners
    playlistTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchPlaylist(tab.dataset.playlist);
        });
    });

    // Keyboard global
    window.addEventListener('keydown', handleKeyboard);

    // Clock
    updateClock();
    setInterval(updateClock, 1000);

    // Canvas setup
    resizeCanvas();
    createParticles();
    if (reduceMotion) {
        drawParticles(0); // static frame
    } else {
        particleLoop(performance.now());
    }

    // Resize handler
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
        if (!reduceMotion && animationId) {
            cancelAnimationFrame(animationId);
        }
        if (!reduceMotion) {
            particleLoop(performance.now());
        } else {
            drawParticles(0);
        }
    });

    // Handle reduced motion changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        reduceMotion = e.matches;
        if (reduceMotion) {
            if (animationId) cancelAnimationFrame(animationId);
            drawParticles(0);
        } else {
            particleLoop(performance.now());
        }
    });
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);