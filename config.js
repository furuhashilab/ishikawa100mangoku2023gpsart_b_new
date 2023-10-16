var config = {
    style: 'mapbox://styles/shio2/clnijjlva01mh01r72xild7q4',
accessToken:'pk.eyJ1Ijoic2hpbzIiLCJhIjoiY2xna3Nyd3J2MDY5dDNzcDZ2cXJtaHFobyJ9.izmy0oit5jVyL6NR7QEMUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'モーゼが石川に辿り着いた時',
    subtitle: 'モーゼは40年の歳月をかけユダヤの民衆をイスラエルの地へ導いた後、シナイ山に登りました。そこから不思議な「天浮船」に乗ったモーゼは能登宝達山にたどり着き、583歳までの余生を石川で過ごしたとされているそうです。そこで、石川に辿り着いたモーゼは一体、どこに行ったのか。気になりますよね？以下のストーリーテリングにてご紹介します',
    byline: 'By チームB しおり　たいゆう',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',    
	chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: '珠洲市',
            image: 'https://user-images.githubusercontent.com/106800258/271775935-878d7e77-5811-4229-b8ef-755d32d6fe25.PNG',
            description: '長く続いたコロナ禍や地震、豪雨災害を乗り越え、皆が活力を取り戻すために。いしかわ百万石文化祭・新幹線開業・世界ジオパークなど皆で盛り上げるために。オール石川のチジョウエール、ONE TEAMを描きます。',
            mapStyle: 'mapbox://styles/shio2/clnijjlva01mh01r72xild7q4',
            location: {
                center: [137.24860, 37.19471],
		zoom: 7.50,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '能登町のイカキングのモニュメント',
            image: 'https://user-images.githubusercontent.com/106800258/271774514-045546f1-efcb-4188-bba2-713b27f3c0d4.jpg',
            description: '日本有数のイカ釣り漁港がある能登町。漁港のそばの巨大モニュメント、イカキングは一躍話題となりました。日本百景に選ばれた九十九湾など風光明媚な里山里海を駆け巡り、能登町に巨大イカキングを描きます。【モーゼが訪れる理由：地域のシンボルともいえる場所から旅を始め、地元の文化を学ぶため。】',
  	    mapStyle: 'mapbox://styles/shio2/clniirw6a01dr01ps3bf2bpk3',        
            location: {
                center: [137.23047, 37.31226],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
               },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
	title: '珠洲市の見附島',
            image: 'https://user-images.githubusercontent.com/106800258/271774442-5fd83f57-d785-48d5-8813-c921dfad2ff9.jpg',
            description: '2023年5月、大きな震災にあった珠洲。夏にはトライアスロン珠洲、秋には奥能登国際芸術祭が数年ぶりに開催されます。スポーツとアートの力、そしてみんなの強い気持ちと団結で乗り越えていきましょう。がんばろうスズ【モーゼが訪れる理由：天然の美しさを感じ、神の創造を賞賛するため。】',           
mapStyle: 'mapbox://styles/shio2/clnik6cpb01mk01r7aiz17sgv',
location: {
                center: [137.24673, 37.39645],
		zoom: 16.74,
		pitch: 45.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: '珠洲市の猿の顔に似ている海岸線',
            image: 'https://user-images.githubusercontent.com/106800258/271774465-d29adf58-b737-46b0-ab00-10f5e836c2df.jpg',
            description: '奥能登には猿にまつわる伝説・伝承が多数残っています。そして珠洲の海岸線は猿の顔そのもの。激坂の山越え、趣の異なる外浦と内浦の海岸線、風情ある珠洲の街並みとバリエーションに富んだコースになっています。【モーゼが訪れる理由：自然のユニークな創造物を目の当たりにし、神の力を感じるため。】',           
mapStyle: 'mapbox://styles/shio2/clniy8jd001ls01rcbscogdqo',
location: {
              	center: [137.25680, 37.52778],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '輪島市の輪島漆芸美術館',
            image: 'https://user-images.githubusercontent.com/106800258/271774567-12f2e0d3-7bc3-4822-8566-c115a14a870c.jpg',
            description: '輪島漆芸美術館のゆるキャラ、わんじま。輪島塗のお椀がモチーフです。輪島漆芸美術館をスタートし、輪島塗スポットや輪島の朝市など観光名所を巡りながら出来上がったアートは、手に輪島塗のお箸を持ったわんじまです。【モーゼが訪れる理由：地元の伝統芸術を尊重し、文化の理解を深めるため。】',           
mapStyle: 'mapbox://styles/shio2/clniykjf701mr01r77ijj4blf',
location: {
               center: [136.89252, 37.38975],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: '輪島市の総持寺祖院',
            image: 'https://user-images.githubusercontent.com/106800258/271774600-b6069a16-db8e-486f-992e-377de2b03144.jpg',
            description: 'かつて北前船の寄港地として栄えた輪島市門前にある総持寺祖院。海を通じて禅の文化を全国に広めました。また總持寺峨山禅師は、羽咋市永光寺の住職を兼ねており、両寺を結ぶ13里（52km）を往来していたそうです。【モーゼが訪れる理由：静寂と平和を求め、精神的な洞察を得るため。】',          
mapStyle: 'mapbox://styles/shio2/clniysve501nq01rce6arhp7z',
location: {
             center: [136.77033, 37.28659],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: '穴水町の根来のボラ待ちやぐら',
            image: 'https://user-images.githubusercontent.com/106800258/271774625-7ba279db-e9da-4423-b4e6-b4f971cc54bf.jpg',
            description: '終日、やぐらの上から海を見張り、魚群がくると網をたぐるという江戸時代からの伝統的漁法のボラ待ちやぐら。最盛期には40基のボラ待ちやぐらがあったそうです。ボラ待ちやぐら3基を巡ってやぐらのアートを描きます。【モーゼが訪れる理由：地域の伝統と歴史を学ぶため。】',         
mapStyle: 'mapbox://styles/shio2/clniz1rbe01mp01pyeokb9q3y',
location: {
                center: [136.90920, 37.19212],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: '志賀町のころ柿の里・しか',
            image: 'https://user-images.githubusercontent.com/106800258/271774648-b57a4650-3287-4aca-ac78-bfe91ce25ba7.jpg',
            description: '能登を代表する特産品、志賀町のころ柿は品種「最勝」を原料柿として、古くから伝わる伝統技法を用いて製造された糖度の高い干柿です。 志賀町の農家の軒先では干し柿がオレンジのカーテンのように吊るされています。【モーゼが訪れる理由：地元の農業を尊重し、その恵みに感謝するため。】',
            mapStyle: 'mapbox://styles/shio2/clniz1rbe01mp01pyeokb9q3y',
            location: {
                center: [136.78006, 37.00720],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'ninth-identifier',
            alignment: 'right',
            hidden: false,
            title: '七尾市の七尾城',
            image: 'https://user-images.githubusercontent.com/106800258/271774681-522659ea-fd33-439a-b13f-faf68b3839ec.jpg',
            description: '日本一のでか山を誇る青柏祭の起源は平安時代。疫病退散を祈願する天王信仰を背景に伝承されています。青柏祭の大地主神社や小丸山城址公園、一本杉通り、山の寺寺院群、国分寺跡を巡り七尾城にでか山を引き上げます。【モーゼが訪れる理由：歴史的な地を訪れ、その地の歴史を尊敬するため。】',
            mapStyle: 'mapbox://styles/shio2/clnizcgss01mq01pyfyx09sh8',
            location: {
                center: [136.98487, 37.00936],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '七尾市の能登島',
            image: 'https://user-images.githubusercontent.com/106800258/271774762-bed1a1c1-7f5c-4607-92aa-46e1fec6f0a5.jpg',
            description: '七尾湾の中に浮かんでいる能登島の海岸線は、美しい海とおだやかな入江、荒波に削られた岩々など変化にとんだ景色が広がっています。海岸線の道路をつないでいくと大きなうさぎが浮かびあがること、ご存じでしたか？【モーゼが訪れる理由：自然の豊かさを体験し、地域の生態系を学ぶため。】',
            mapStyle: 'mapbox://styles/shio2/clnizgup2000201r7diae5swr',
 location: {
               center: [136.99349, 37.13254],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: '七尾市の和倉温泉',
            image: 'https://user-images.githubusercontent.com/106800258/271774797-623aafee-f97d-4669-9d0e-133529649470.jpg',
            description: '日本では珍しい海から温泉が湧き出ている和倉温泉。七尾湾で一羽の白鷺が傷を癒していたのを漁師夫婦が見つけ、不思議に思い近づいてみると海中から温泉が湧き出ていた。これが和倉温泉の発祥とされています。【モーゼが訪れる理由：体の癒しと精神の安らぎを求めるため。】',
            mapStyle: 'mapbox://styles/shio2/clnizjrut01lt01rcfirp4zea',
 location: {
               center: [136.92389, 37.08748],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twelfth-identifier',
            alignment: 'left',
            hidden: false,
            title: '中能登町の杉谷チャノバタケ遺跡',
            image: 'https://user-images.githubusercontent.com/106800258/271774847-935b242e-d75b-4eb7-8526-57ddb6acda7b.jpg',
            description: 'おにぎりの里　中能登町。その由来は日本最古のおにぎりが出土したことから。1987年に弥生時代の竪穴住居跡からチマキ状炭化米の塊（おにぎりの化石）が発見されました。以降、おにぎりで町おこしがおこなわれています、【モーゼが訪れる理由：地域の歴史を深く知り、過去の人々の生活を理解するため。】',
            mapStyle: 'mapbox://styles/shio2/clnizzmxs01kl01refdwo5iym',
 location: {
                center: [136.84928, 36.95584],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '羽昨市の羽昨駅前',
            image: 'https://user-images.githubusercontent.com/106800258/271774889-9437d9eb-0f09-4f5f-abf7-b519d7bba84e.jpg',
            description: 'UFOの町羽咋。気多大社の横にある正覚院の「気多古縁起」という古い巻物の中には、神力自在に飛ぶ物体が登場したということが由来だそうです。コスモアイル羽咋にはロケットや宇宙船の実物が展示されています。【モーゼが訪れる理由：地元のコミュニティの中心で人々と交流し、彼らの日常生活を知るため】',
            mapStyle: 'mapbox://styles/shio2/clnizzmxs01kl01refdwo5iym',
 location: {
                center: [136.78326, 36.89664],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fourteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'かほく市の考える人の像',
            image: 'https://user-images.githubusercontent.com/106800258/271774986-1c91c87c-c6c9-499d-90b0-bf01eefc801e.jpg',
            description: 'かほく市が生んだ日本近代哲学の偉人、西田幾多郎。幾多郎の生誕地から生い立ちの地、西田幾多郎哲学館、哲学の道、幾多郎のお墓など幾多郎のルーツを巡っていくと、「考える人」が町に浮かびあがります。【モーゼが訪れる理由：芸術を通じて人間の思考を理解し、深く思索するため。】',
            mapStyle: 'mapbox://styles/shio2/clnizzmxs01kl01refdwo5iym',
 location: {
                center: [136.70453, 36.72240],
		zoom: 16.00,
		pitch: 45.00,
		bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fifteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '津幡町の河北潟',
            image: 'https://user-images.githubusercontent.com/106800258/271775022-129a6f18-b8d1-4407-a505-61c6496a1161.jpg',
            description: '河北潟一周駅伝は箱根駅伝と同じ大正9年（1920年）から始まった日本最古の駅伝であり、開催回数は100回を超える伝統的な大会。襷をつないでゴールテープを切るランナーをゴール地点の津幡町で描きます。【モーゼが訪れる理由：自然の豊かさを感じ取り、その景観の美しさに感謝するため。】',
            mapStyle: 'mapbox://styles/shio2/clnj0c4x801km01re2l6x0xsj',
            location: {
                center: [136.72758, 36.66335],
		zoom: 16.00,
		pitch: 45.00,
		bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'sixteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '内灘町の内灘海水浴場',
            image: 'https://user-images.githubusercontent.com/106800258/271775074-4daa637e-8ba5-43a0-ae63-0068d019e29f.jpg',
            description: '毎年5月に内灘海水浴場で行われる内灘 世界の凧の祭典は、県内外そして海外からたくさんの人が集まる凧の祭典です。アート上にある凧会館では凧づくり体験を行うことができ、内灘海岸では凧あげも楽しめます【モーゼが訪れる理由：海の神秘的な美しさと力を体感し、その恵みに感謝するため。】',
            mapStyle: 'mapbox://styles/shio2/clnj0gx3r01mr01pyfh846e0d',
            location: {
                center: [136.62648, 36.63815],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'seventeenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '金沢市の森八本店',
            image: 'https://user-images.githubusercontent.com/106800258/271775532-ef08c2e3-fe18-4315-91e8-28fc28b6b7c0.jpg',
            description: '金沢では、お正月に梅の形をした紅白の最中、福梅を食べる風習があります。この福梅のルーツは加賀百万石の殿様、前田家の家紋「梅鉢紋」に由来しています。和菓子の町、金沢で和菓子屋さん巡りはいかがでしょう。【モーゼが訪れる理由：地元の伝統的な食文化を尊重し、その風味を味わうため。】',
            mapStyle: 'mapbox://styles/shio2/clnj0gx3r01mr01pyfh846e0d',
            location: {
                center: [136.66389, 36.56947],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eightteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '金沢市の金沢城',
            image: 'https://user-images.githubusercontent.com/106800258/271775159-4e79eb04-2c5f-4720-bccc-e9eed54a3658.jpg',
            description: '戦火を免れた金沢は、江戸時代から道筋がほとんど変わっていない城下町。昔ながらの町屋が多数残り、町並みそのものが観光名所。金沢城を中心に武家屋敷跡や金沢五社、金沢三茶屋街、金沢三寺院群などを巡ります。【モーゼが訪れる理由：歴史的な建築物を訪れ、地域の歴史と文化遺産を尊敬するため。】',
            mapStyle: 'mapbox://styles/shio2/clnizzmxs01kl01refdwo5iym',
            location: {
                center: [136.66233, 36.56796],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'nineteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '布市神社',
            image: 'https://user-images.githubusercontent.com/106800258/271776375-65f21d45-c89b-41ee-9606-0acc701401cb.jpg',
            description: '富樫氏は、室町時代に加賀国を支配した守護大名。それ以前も木曽義仲との対戦や、源義経の勧進帳など歴史の舞台に度々登場しています。守護所を置いた富樫館跡や、富樫氏が建てた布市神社、喜多家住宅などを巡ります。【モーゼが訪れる理由：精神的な場所で祈り、神聖なエネルギーを感じ取るため。】',
            mapStyle: 'mapbox://styles/shio2/clnj0wdfz01ks01pu9jqjbzp4',
            location: {
                center: [136.61834, 36.53201],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twentieth-identifier',
            alignment: 'left',
            hidden: false,
            title: '千代の里俳句館',
            image: 'https://user-images.githubusercontent.com/106800258/271775265-54b0ab4f-6de9-480c-ae2c-75202f3808a3.jpg',
            description: '江戸時代の俳人・千代女は白山市出身。千代女は朝顔の句を多く詠んでいることから、朝顔は白山市の花になっています。若宮八幡宮・明達寺・千代女の里俳句館・本誓寺・聖興寺など白山市の観光スポットを巡ります。【モーゼが訪れる理由：詩を通じて人々の感情や思考を理解し、言葉の力を感じるため。】',
            mapStyle: 'mapbox://styles/shio2/clnj1h3cm01ms01py2bplekmd',
            location: {
                center: [136.56786, 36.52453],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-first-identifier',
            alignment: 'left',
            hidden: false,
            title: '白山市の吉田酒造',
            image: 'https://user-images.githubusercontent.com/106800258/271775289-a41a01ca-3379-4fc8-ad72-0f01cdb39ab2.jpg',
            description: '白山市は霊峰白山から流れる手取川の伏流水と加賀平野の良質な酒米を用いた日本酒の一大生産地として古より知られております。見渡すかぎり田んぼののどかな扇状地。「手取川」吉田酒造、「天狗舞」車多酒造を巡ります。【モーゼが訪れる理由：地域の伝統的な製造技術を尊敬し、その味を楽しむため。】',
            mapStyle: 'mapbox://styles/shio2/clnj214cv01al01r27g86d0ws',
            location: {
                center: [136.56571, 36.48727],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-second-identifier',
            alignment: 'left',
            hidden: false,
            title: '白山市のフグ安新',
            image: 'https://user-images.githubusercontent.com/106800258/271775373-71ac87a3-1283-48a5-b5f7-1b8efccf6cc7.jpg',
            description: '霊峰白山の恵み大地のミネラルを大量に含んだ伏流水は、醗酵食文化を生み出しました。江戸時代より伝わる美川ふぐの子糠漬は、猛毒のふぐの卵巣を使った奇跡の発酵食品として文化庁「100年フード」に認定されています。【モーゼが訪れる理由：地域の特産品を尊重し、異なる味を体験するため。】',
            mapStyle: 'mapbox://styles/shio2/clnj1h3cm01ms01py2bplekmd',
            location: {
                center: [136.63412, 36.54112],
		zoom: 14.62,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-third-identifier',
            alignment: 'left',
            hidden: false,
            title: '加賀禅定道',
            image: 'https://user-images.githubusercontent.com/106800258/271775415-5cede19b-c4cd-443b-8a36-799ea1cab4da.jpg',
            description: '平安時代に開かれた加賀禅定道は巨大な扇状地の頂点にある白山比咩神社を起点に、白山へと至る歴史ある信仰の道。白山に登る修験者の安全を祈願するお守りとして使われていた牛王印を手取川扇状地全体に描きます。【モーゼが訪れる理由：精神的な教えを学び、心の平安を求めるため。】',
            mapStyle: 'mapbox://styles/shio2/clnj1nh2x01ak01r20bik8iml',
            location: {
                center: [136.63614, 36.43485],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: '白山手取川ジオパーク',
            image: 'https://user-images.githubusercontent.com/106800258/271775491-320a789b-9b79-4e0d-94f2-736f84977305.jpg',
            description: '白山手取川ジオパークは2023年、ユネスコ世界ジオパークに認定されました。白山に降った雪が水となり、手取川から日本海に流れる水の旅がテーマです。山頂から加賀禅定道～手取川～日本海までの水の旅を描きます。【モーゼが訪れる理由：地球の歴史と自然の力を学び、その大きさに畏敬の念を抱くため。】',
            mapStyle: 'mapbox://styles/shio2/clnj1wypg01mu01pya7xy2v18',
            location: {
                center: [136.48127, 36.48863],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '川北町の白山が見えるスポット',
            image: 'https://user-images.githubusercontent.com/106800258/271775594-6a37ffb8-e1a7-4914-a7b2-d2e876e50853.jpg',
            description: '霊峰白山を源とする手取川の右岸にある川北町。川北町は白山と手取川からたくさんの恩恵を受ける一方、手取川の水害との戦いの歴史でもありました。人々の暮らしや文化に大きな影響を与えてきた白山を描きます。【モーゼが訪れる理由：自然の壮大さを見て、その美しさと力に感謝するため。】',
            mapStyle: 'mapbox://styles/shio2/clnj2dpem01mv01pyaj6t4zq7',
　　　　　　 location: {
                center: [136.54146, 36.47024],
		zoom: 12.87,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: '能美市の松井秀喜像',
            image: 'https://user-images.githubusercontent.com/106800258/271775657-03f3e1f4-8b9d-4b36-b28a-01a381a4d8ca.jpg',
            description: '巨人・NYヤンキースで活躍した松井秀喜さんは石川県能美市出身。松井秀喜ベースボールミュージアムを起点に松井さんの母校（浜小学校、根上中学）をはじめ、根上りの松、弁慶謝罪の地などを巡ります。【モーゼが訪れる理由：地元の英雄を讃え、人々の誇りを共有するため。】',
            mapStyle: 'mapbox://styles/shio2/clnj214cv01al01r27g86d0ws',
            location: {
                center: [136.43627, 36.43087],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: '能美古墳群',
            image: 'https://user-images.githubusercontent.com/106800258/271775694-b806c259-674d-4807-ab6e-82162fa2fc75.jpg',
            description: '能美古墳群、寺井山→末寺山→和田山（２座）→秋常山→西山を繋ぎ埴輪を描きます。能美ふるさとミュージアムでは遺跡で発掘された壺や宝剣・埴輪などを見学。今年は加賀立国能美誕生1200年。能美市のルーツを探ります。【モーゼが訪れる理由：過去の文化を理解し、歴史の重要性を学ぶため。',
            mapStyle: 'mapbox://styles/shio2/clnj2dpem01mv01pyaj6t4zq7',
　　　　　　 location: {
                center: [136.42982, 36.60528],
		zoom: 9.86,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: '加賀市のご当地マンホール',
            image: 'https://user-images.githubusercontent.com/106800258/271775776-f09edb86-1481-401f-a1f2-e32b2fb4c4e4.jpg',
            description: '加賀市にはラムサール条約に登録されている日本有数の鴨の越冬池や、江戸時代より伝わる伝統的鴨漁「坂網漁」など鴨にちなんだものが有名です。加賀市大聖寺で加賀市の公式キャラクターかも丸くんを描きます。【モーゼが訪れる理由：地域のユニークな特徴を楽しみ、その個性を尊敬するため。】',
            mapStyle: 'mapbox://styles/shio2/clnj214cv01al01r27g86d0ws',
            location: {
                center: [136.36146, 36.27502],
		zoom: 12.88,
		pitch: 45.00,
		bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: '加賀市の芭蕉の館',
            image: 'https://user-images.githubusercontent.com/106800258/271775854-4c396353-5b8f-46f2-addf-22f777ba85b3.jpg',
            description: '開湯1300年の歴史を持つ山中温泉は、芭蕉が称賛した日本三大名湯の1つ。1689年夏、奥の細道の道中、松尾芭蕉は山中温泉に長期にわたって滞在しました。山中温泉の数々の名所旧跡には芭蕉の句が残されています。【モーゼが訪れる理由：地域の文化と歴史を尊重し、その知識を深めるため。】',
            mapStyle: 'mapbox://styles/shio2/clnj315t201an01r28eag3iss',
            location: {
                center: [136.37387, 36.24642],
		zoom: 16.00,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirtieth-identifier',
            alignment: 'left',
            hidden: false,
            title: '加賀市の山の文化館',
            image: 'https://user-images.githubusercontent.com/106800258/271775894-1160aa4b-f515-4490-9e23-a688e8cc86cf.jpg',
            description: '日本人はたいていふるさとの山を持っている。「日本百名山」著者、深田久弥は加賀市大聖寺出身。深田久弥山の文化館でルーツを探り、久弥が愛した白山を眺めながら生まれ育った大聖寺の城下町をめぐります。【モーゼが訪れる理由：地域の多様性と独自性を尊重し、人々との絆を深め、神の教えを広めるために訪れました。】',
            mapStyle: 'mapbox://styles/shio2/clnj315t201an01r28eag3iss',
　　　　　　 location: {
               center: [136.36443, 36.26988],
		zoom: 10.79,
		pitch: 45.00,
		bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-first-identifier',
            alignment: 'left',
            hidden: false,
            title: '宝達志水町の伝説の森モーゼパーク',
            image: 'https://user-images.githubusercontent.com/106800258/271774930-65863e79-091e-4ed2-9c30-8e7cad1e1af8.jpg',
            description: '宝達志水町モーゼパークには、旧約聖書「十戒」で海を割ったモーゼの墓があります。ユダヤの民衆をイスラエルの地へ導いた後、不思議な天浮船で宝達山にどり着き、余生をこの地で過ごしたという言い伝えがあります。',
            mapStyle: 'mapbox://styles/shio2/clnj36d9g01kw01pue7on2fx1',
　　　　　　 location: {
                center: [136.77747, 36.81480],
		zoom: 16.00,
		pitch: 45.00,
		bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty-eighth-chapter',
            alignment: 'fully',
            hidden: false,
            title: '締め',
            image: '',
            description: 'いかがでしょうか？GPTモーゼはなかなかに好奇心なモーゼでしたね。このモーゼは、地理的な位置、歴史的・文化的な重要性、そして各地の特徴に基づいてルートを選択した、、？そうです！是非一度、モーゼになりきって石川観光してみてください！ありがとうございました！',
            mapStyle: 'mapbox://styles/shio2/clnj38vcu01ko01re44lrdlns',
　　　　　　 location: {
                center: [136.94993, 36.79451],
		zoom: 8.21,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
