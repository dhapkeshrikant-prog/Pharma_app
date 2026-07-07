import type { Product } from '../types';

const img = (file: string) => `/product-images/${file}`;

const resolveProductImage = (slug: string, fallbackFile: string) => {
  const overrides: Record<string, string> = {
    'aps-aya': 'APS_AYA Image.png',
    'azaya-lb': 'AZAYA-LB med.png',
    'boneaya': 'BONEAYA-img.png',
    'boneaya-m': 'BONEAYA M Elderly Care.png',
    'cufreez-a': 'CUFREEZ‑A.png',
    'cufreez-ls': 'Cufreez‑LS and Cufreez‑LS Junior.png',
    'dazer-cv': 'DAZER-CV.png',
    'kshitiz-tablet': 'KSHITIZ image.png',
    'kshitiz-syrup': 'Kshitiz 200ml img 3.png',
    'kshitiz-gro': 'Kshitiz Gro.png',
    'neuraya': 'NEURAYA.png',
    'panaya-40': 'PANAYA-40.png',
    'panaya-40-dsr': 'PANAYA-DSR.png',
    'panaya-os': 'PANAYA-OS.png',
    'snofreez': 'SNOFREEZ.png',
    'upstrin-forte': 'Methyclodbalamin,Alpha pck 1tab.png',
  };

  return img(overrides[slug] ?? fallbackFile);
};

export const products: Product[] = [
  {
    name: 'APS-AYA',
    category: 'Pain Relief',
    categorySlug: 'pain-relief',
    slug: 'aps-aya',
    composition: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
    ingredients: ['Aceclofenac', 'Paracetamol', 'Serratiopeptidase'],
    description: 'Triple-action anti-inflammatory pain relief formulation.',
    indications: 'Relief of pain and inflammation in osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, muscle spasms, and post-operative pain.',
    benefits: 'Aceclofenac reduces pain and swelling, Paracetamol acts as an antipyretic/analgesic, and Serratiopeptidase acts as a tissue repair promoter by breaking down inflammatory debris.',
    dosage: 'One tablet twice daily after meals, or as directed by a healthcare professional.',
    storage: 'Store in a cool, dry place at a temperature not exceeding 30°C. Protect from light and moisture.',
    packaging: '10 x 10 Blister Pack',
    color: '#0EA5E9',
    accent: '#E0F2FE',
    image: resolveProductImage('aps-aya', 'APS_AYA Image.png'),
    imageAlt: 'APS-AYA tablet pack',
    translations: {
      hi: {
        category: 'दर्द निवारक',
        description: 'उन्नत तिहरी-क्रिया वाली सूजनरोधी दर्द निवारक टैबलेट।',
        composition: 'एसेक्लोफेनाक 100mg + पैरासिटामोल 325mg + सेराशियोपेप्टिडेस 15mg',
        indications: 'ऑस्टियोआर्थराइटिस, रूमेटोइड आर्थराइटिस, एंकिलॉज़िंग स्पॉन्डिलाइटिस, मांसपेशियों में ऐंठन और सर्जरी के बाद के दर्द और सूजन से राहत।',
        benefits: 'एसेक्लोफेनाक दर्द और सूजन को कम करता है, पैरासिटामोल बुखार और दर्द के संकेतों को रोकता है, और सेराशियोपेप्टिडेस सूजन वाली जगह पर खराब ऊतकों को तोड़कर घाव भरने को तेज करता है।',
        dosage: 'भोजन के बाद दिन में दो बार एक टैबलेट, या डॉक्टर की सलाह के अनुसार।',
        storage: 'सूखी जगह पर 30°C से कम तापमान पर रखें। रोशनी और नमी से बचाएं।',
        packaging: '10 x 10 ब्लिस्टर पैक'
      },
      mr: {
        category: 'वेदना शामक',
        description: 'प्रगत तिहेरी-क्रिया वेदनाशामक आणि दाहक-विरोधी टॅब्लेट.',
        composition: 'अॅसेक्लोफेनाक १०० मिग्रॅ + पॅरासिटामॉल ३२५ मिग्रॅ + सेराशियोपेप्टिडेस १५ मिग्रॅ',
        indications: 'ऑस्टियोआर्थरायटिस, संधिवात, अंकोइलायझिंग स्पॉन्डिलायटिस, स्नायूंचे पेटके आणि शस्त्रक्रियेनंतरच्या वेदना आणि सूज यापासून आराम.',
        benefits: 'अॅसेक्लोफेनाक वेदना आणि सूज कमी करते, पॅरासिटामॉल ताप आणि वेदनांचे संकेत थांबवते, आणि सेराशियोपेप्टिडेस सूज आलेल्या जागेवर प्रथिने तोडून बरे होण्यास गती देते.',
        dosage: 'जेवणानंतर दिवसातून दोनदा एक टॅब्लेट, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: '30°C पेक्षा कमी तापमानात कोरड्या जागी साठवा. प्रकाश आणि ओलाव्यापासून संरक्षण करा.',
        packaging: '10 x 10 ब्लिस्टर पॅक'
      }
    }
  },
  {
    name: 'AZAYA-LB',
    category: 'Antibiotics',
    categorySlug: 'antibiotics',
    slug: 'azaya-lb',
    composition: 'Azithromycin 500mg and Lactic Acid Bacillus 60 Million Spores',
    ingredients: ['Azithromycin', 'Lactic Acid Bacillus'],
    description: 'Broad-spectrum antibiotic formulation with gut-protective probiotic spores.',
    indications: 'Bacterial infections of the respiratory tract (bronchitis, pneumonia), throat (tonsillitis, pharyngitis), ear, nasal sinuses, and skin.',
    benefits: 'Azithromycin eliminates infection by stopping bacterial protein synthesis. Lactic Acid Bacillus restores healthy gut microflora and prevents antibiotic-induced diarrhea.',
    dosage: 'One tablet daily for 3 to 5 days, taken 1 hour before or 2 hours after meals, or as advised by a physician.',
    storage: 'Store below 25°C in a dry place. Protect from direct sunlight.',
    packaging: '10 x 3 Alu-Alu Pack',
    color: '#2563EB',
    accent: '#DBEAFE',
    image: resolveProductImage('azaya-lb', 'AZAYA-LB med.png'),
    imageAlt: 'AZAYA-LB tablet pack',
    translations: {
      hi: {
        category: 'एंटिबॉयोटिक्स',
        description: 'पेट की सुरक्षा के लिए प्रोबायोटिक बीजाणुओं के साथ व्यापक-स्पेक्ट्रम एंटीबायोटिक।',
        composition: 'एजिथ्रोमाइसिन 500mg और लैक्टिक एसिड बैसिलस 60 मिलियन स्पोर्स',
        indications: 'श्वसन तंत्र (ब्रोंकाइटिस, निमोनिया), गला (टॉन्सिलिटिस, ग्रसनीशोथ), कान, नाक और त्वचा के संक्रमण का इलाज।',
        benefits: 'एजिथ्रोमाइसिन बैक्टीरिया के प्रोटीन निर्माण को रोककर संक्रमण को समाप्त करता है। लैक्टिक एसिड बैसिलस एंटीबायोटिक से होने वाले दस्त को रोकता है और पेट के अच्छे बैक्टीरिया को बनाए रखता है।',
        dosage: '3 से 5 दिनों के लिए रोजाना एक टैबलेट, भोजन से 1 घंटे पहले या 2 घंटे बाद, या डॉक्टर की सलाह के अनुसार।',
        storage: '25°C से कम तापमान पर रखें, रोशनी और नमी से बचाएं।',
        packaging: '10 x 3 एल्यु-एल्यु पैक'
      },
      mr: {
        category: 'अँटीबायोटिक्स',
        description: 'पोटाच्या संरक्षणासाठी प्रोबायोटिक बीजाणूंसह विस्तृत-स्पेक्ट्रम अँटीबायोटिक.',
        composition: 'अझिथ्रोमायसिन ५०० मिग्रॅ आणि लॅक्टिक ॲसिड बॅसिलस ६० दशलक्ष बीजाणू',
        indications: 'श्वसनमार्गाचे संसर्ग, घशाचे संसर्ग (टॉन्सिलिटिस), कान, नाक आणि त्वचेचे संसर्ग यावर उपचार.',
        benefits: 'अझिथ्रोमायसिन बॅक्टेरियाच्या वाढीला रोखून संसर्ग नष्ट करते. लॅक्टिक अॅसिड बॅसिलस अँटीबायोटिकमुळे होणारे अतिसार रोखते आणि पोटातील निरोगी बॅक्टेरिया राखते.',
        dosage: '3 ते 5 दिवसांसाठी दररोज एक टॅब्लेट, जेवणापूर्वी 1 तास किंवा जेवणानंतर 2 तासांनी, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: '25°C पेक्षा कमी तापमानात साठवा, प्रकाश आणि ओलाव्यापासून संरक्षण करा.',
        packaging: '10 x 3 अ‍ॅ्यु-अ‍ॅ्यु पॅक'
      }
    }
  },
  {
    name: 'BONEAYA',
    category: 'Orthopedic',
    categorySlug: 'orthopedic',
    slug: 'boneaya',
    composition: 'Calcium Citrate 1000mg + Vitamin D3 200 IU + Magnesium 100mg + Zinc 4mg',
    ingredients: ['Calcium Citrate', 'Vitamin D3', 'Magnesium', 'Zinc'],
    description: 'Essential calcium supplement designed for superior absorption and bone mineralization.',
    indications: 'Management of osteoporosis, osteomalacia, calcium deficiency, and supportive therapy for fractures, pregnancy, and lactation.',
    benefits: 'Calcium Citrate provides highly absorbable elemental calcium. Vitamin D3 optimizes intestinal calcium absorption. Magnesium and Zinc act as vital co-factors for maintaining bone density.',
    dosage: 'One tablet daily with water after meals, or as recommended by your doctor.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    packaging: '10 x 10 Blister Pack',
    color: '#0891B2',
    accent: '#CFFAFE',
    image: resolveProductImage('boneaya', 'BONEAYA-img.png'),
    imageAlt: 'BONEAYA calcium tablet pack',
    translations: {
      hi: {
        category: 'ऑर्थोपेडिक',
        description: 'कैल्शियम और खनिजों की पूर्ति के लिए आवश्यक हड्डी स्वास्थ्य फॉर्मूला।',
        composition: 'कैल्शियम साइट्रेट 1000mg + विटामिन D3 200 IU + मैग्नीशियम 100mg + जिंक 4mg',
        indications: 'ऑस्टियोपोरोसिस, ऑस्टियोमलेशिया, कैल्शियम की कमी, गर्भावस्था/स्तनपान के दौरान सहायता और रजोनिवृत्ति के बाद हड्डियों का स्वास्थ्य।',
        benefits: 'कैल्शियम साइट्रेट बेहतर अवशोषण प्रदान करता है। विटामिन डी3 पेट में कैल्शियम के अवशोषण को सुगम बनाता है। मैग्नीशियम और जिंक हड्डियों के खनिजीकरण के लिए को-फैक्टर्स के रूप में कार्य करते हैं।',
        dosage: 'भोजन के बाद पानी के साथ रोजाना एक टैबलेट, या डॉक्टर की सलाह के अनुसार।',
        storage: 'ठंडी और सूखी जगह पर रखें। बच्चों की पहुंच से दूर रखें।',
        packaging: '10 x 10 ब्लिस्टर पैक'
      },
      mr: {
        category: 'ऑर्थोपेडिक',
        description: 'कॅल्शियम आणि खनिजांच्या कमतरतेसाठी आवश्यक हाडांच्या आरोग्याचे form्युला.',
        composition: 'कॅल्शियम सायट्रेट १००० मिग्रॅ + व्हिटॅमिन डी३ २०० आययू + मॅग्नेशियम १०० मिग्रॅ + झिंक ४ मिग्रॅ',
        indications: 'ऑस्टियोपोरोसिस, ऑस्टियोमलेशिया, कॅल्शियमची कमतरता, गर्भधारणा/स्तनपान दरम्यान सहाय्य आणि रजोनिवृत्तीनंतर हाडांचे आरोग्य.',
        benefits: 'कॅल्शियम सायट्रेट उत्कृष्ट शोषण प्रदान करते. व्हिटॅमिन डी३ पोटात कॅल्शियमचे शोषण सुलभ करते. मॅग्नेशियम आणि झिंक हाडांच्या खनिजीकरणासाठी मदत करतात.',
        dosage: 'जेवणानंतर पाण्यासोबत दररोज एक टॅब्लेट, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: 'थंड आणि कोरड्या ठिकाणी साठवा. मुलांच्या हातापासून दूर ठेवा.',
        packaging: '10 x 10 ब्लिस्टर पॅक'
      }
    }
  },
  {
    name: 'BONEAYA M',
    category: 'Orthopedic',
    categorySlug: 'orthopedic',
    slug: 'boneaya-m',
    composition: 'Calcitriol 0.25 mcg + Calcium Carbonate 500mg + Methylcobalamin 1500 mcg + Folic Acid 1.5mg',
    ingredients: ['Methylcobalamin', 'Folic Acid', 'Calcium Carbonate', 'Calcitriol'],
    description: 'Comprehensive softgel formula targeting calcium absorption, bone strength, and neuropathic care.',
    indications: 'Elderly bone care, post-menopausal osteoporosis, neuropathic pain, diabetic neuropathy, and mineral deficiencies in pregnancy.',
    benefits: 'Calcitriol (active Vitamin D) increases calcium absorption in the gut. Calcium Carbonate replenishes elemental calcium. Methylcobalamin regenerates damaged nerves and myelin sheaths, while Folic Acid supports RBC production.',
    dosage: 'One capsule daily, preferably after dinner, or as directed by the physician.',
    storage: 'Store below 25°C in a dry place. Protect from heat, light, and moisture.',
    packaging: '10 x 1 x 10 Softgel Box',
    color: '#4F46E5',
    accent: '#E0E7FF',
    image: resolveProductImage('boneaya-m', 'BONEAYA M Elderly Care.png'),
    imageAlt: 'BONEAYA M capsule pack',
    translations: {
      hi: {
        category: 'ऑर्थोपेडिक',
        description: 'हड्डियों और नसों की संपूर्ण देखभाल के लिए उन्नत न्यूरोपैथिक और ऑर्थोपेडिक सॉफ्टगेल फॉर्मूला।',
        composition: 'कैल्सीट्रियोल 0.25 mcg + कैल्शियम कार्बोनेट 500mg + मिथाइलकोबालामिन 1500 mcg + फोलिक एसिड 1.5mg',
        indications: 'डायबिटिक न्यूरोपैथी, ऑस्टियोपोरोसिस, हड्डियों के फ्रैक्चर, गर्भावस्था-प्रेरित कैल्शियम की कमी और बुजुर्गों की हड्डियों की देखभाल।',
        benefits: 'कैल्सीट्रियोल (सक्रिय विटामिन डी) कैल्शियम अवशोषण को बढ़ाता है। कैल्शियम कार्बोनेट उच्च मात्रा में कैल्शियम प्रदान करता है। मिथाइलकोबालामिन नसों के पुनर्जनन को बढ़ावा देता है। फोलिक एसिड रक्त कोशिकाओं का निर्माण करता है।',
        dosage: 'रोजाना एक कैप्सूल, रात के भोजन के बाद, या चिकित्सक के निर्देशानुसार।',
        storage: '25°C से कम तापमान पर सूखी जगह पर रखें। गर्मी, रोशनी और नमी से बचाएं।',
        packaging: '10 x 1 x 10 सॉफ्टगेल बॉक्स'
      },
      mr: {
        category: 'ऑर्थोपेडिक',
        description: 'हाडे आणि मज्जातंतूंच्या संपूर्ण काळजीसाठी प्रगत न्यूरोपॅथिक आणि ऑर्थोपेडिक सॉफ्टगेल फॉर्म्युला.',
        composition: 'कॅल्सीट्रिओल ०.२५ एमसीजी + कॅल्शियम कार्बोनेट ५०० मिग्रॅ + मिथाइलकोबालामिन १५०० एमसीजी + फॉलिक ॲसिड १.५ मिग्रॅ',
        indications: 'डायबेटिक न्यूरोपॅथी, ऑस्टियोपोरोसिस, हाडे फ्रॅक्चर, गर्भधारणेमुळे होणारी कॅल्शियमची कमतरता आणि वृद्धांच्या हाडांची काळजी.',
        benefits: 'कॅल्सीट्रिओल (सक्रिय व्हिटॅमिन डी) कॅल्शियमचे शोषण वाढवते. कॅल्शियम कार्बोनेट उच्च प्रमाणात कॅल्शियम प्रदान करते. मिथाइलकोबालामिन मज्जातंतूंच्या दुरुस्तीला आणि पुनरुत्पादनाला प्रोत्साहन देते.',
        dosage: 'दररोज एक कॅप्सूल, शक्यतो रात्रीच्या जेवणानंतर, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: '२५ डिग्री सेल्सिअस पेक्षा कमी तापमानात कोरड्या जागी साठवा. उष्णता, प्रकाश आणि ओलाव्यापासून संरक्षण करा.',
        packaging: '10 x 1 x 10 सॉफ्टगेल बॉक्स'
      }
    }
  },
  {
    name: 'CUFREEZ-A',
    category: 'Respiratory',
    categorySlug: 'respiratory',
    slug: 'cufreez-a',
    composition: 'Ambroxol HCl 30mg + Guaiphenesin 50mg + Terbutaline Sulfate 1.25mg / 5ml',
    ingredients: ['Ambroxol', 'Guaiphenesin', 'Terbutaline'],
    description: 'Expectorant and bronchodilator syrup for effective productive cough relief.',
    indications: 'Cough with mucus associated with bronchitis, asthma, emphysema, and respiratory tract infections.',
    benefits: 'Ambroxol acts as a mucolytic (thins thick mucus). Guaiphenesin works as an expectorant (clears mucus from the lungs). Terbutaline acts as a bronchodilator (relaxes and opens airways for easy breathing).',
    dosage: 'Adults: 10ml three times daily. Children: As directed by the pediatrician.',
    storage: 'Store below 30°C. Protect from light. Do not freeze.',
    packaging: '100ml Bottle with Measuring Cup',
    color: '#E11D48',
    accent: '#FFE4E6',
    image: resolveProductImage('cufreez-a', 'CUFREEZ‑A.png'),
    imageAlt: 'CUFREEZ-A syrup bottle',
    translations: {
      hi: {
        category: 'श्वसन संबंधी',
        description: 'गीली खांसी और बलगम से राहत दिलाने वाला कफ सिरप।',
        composition: 'एम्ब्रोक्सोल 30mg + गुआइफेनेसिन 50mg + टरबुटालाइन 1.25mg / 5ml',
        indications: 'ब्रोंकाइटिस, अस्थमा और सांस नली के संक्रमण के कारण होने वाली बलगम वाली खांसी का इलाज।',
        benefits: 'एम्ब्रोक्सोल गाढ़े बलगम को पतला करता है। गुआइफेनेसिन फेफड़ों से बलगम को बाहर निकालने में मदद करता है। टरबुटालाइन सांस की नली को फैलाकर सांस लेना आसान बनाता है।',
        dosage: 'वयस्क: 10ml दिन में तीन बार। बच्चे: बाल रोग विशेषज्ञ की सलाह के अनुसार।',
        storage: '30°C से कम तापमान पर रखें। रोशनी से बचाएं। फ्रीज न करें।',
        packaging: '100ml बोतल मापने वाले कप के साथ'
      },
      mr: {
        category: 'श्वसन संस्था',
        description: 'ओल्या खोकल्यासाठी आणि श्वासोच्छवासाच्या त्रासासाठी कफ सिरप.',
        composition: 'अॅम्ब्रोक्सॉल ३० मिग्रॅ + ग्विफेनेसिन ५० मिग्रॅ + टरब्युटालिन १.२५ मिग्रॅ / ५ मिली',
        indications: 'ब्रॉन्कायटिस, दमा आणि फुफ्फुसांच्या संसर्गाशी संबंधित कफयुक्त खोकल्यापासून आराम.',
        benefits: 'अॅम्ब्रोक्सॉल कफ पातळ करतो. ग्विफेनेसिन फुफ्फुसातून कफ बाहेर टाकण्यास मदत करतो. टरब्युटालिन श्वासवाहिन्या मोकळ्या करतो ज्यामुळे श्वास घेणे सोपे जाते.',
        dosage: 'प्रौढ: १० मिली दिवसातून तीन वेळा. मुले: डॉक्टरांच्या सल्ल्यानुसार.',
        storage: '30°C पेक्षा कमी तापमानात साठवा. गोठवू नका. प्रकाशापासून संरक्षण करा.',
        packaging: '१०० मिली बाटली मोजमाप कपासाहित'
      }
    }
  },
  {
    name: 'CUFREEZ-LS',
    category: 'Respiratory',
    categorySlug: 'respiratory',
    slug: 'cufreez-ls',
    composition: 'Levosalbutamol 1mg + Ambroxol HCl 30mg + Guaiphenesin 50mg / 5ml',
    ingredients: ['Levosalbutamol', 'Ambroxol', 'Guaiphenesin'],
    description: 'Advanced pediatric and adult cough formula for chest congestion and spasm.',
    indications: 'Relief of wet cough, chest congestion, asthmatic bronchitis, and bronchospasms.',
    benefits: 'Levosalbutamol relaxes airway muscles without causing cardiac overstimulation. Ambroxol thins mucus, and Guaiphenesin helps clear sticky congestion from the chest.',
    dosage: 'Adults: 5-10 ml thrice daily. Children: As recommended by a pediatrician.',
    storage: 'Store below 25°C, protected from light. Keep out of reach of children.',
    packaging: '100ml Bottle',
    color: '#10B981',
    accent: '#D1FAE5',
    image: resolveProductImage('cufreez-ls', 'Cufreez‑LS and Cufreez‑LS Junior.png'),
    imageAlt: 'CUFREEZ-LS syrup bottle',
    translations: {
      hi: {
        category: 'श्वसन संबंधी',
        description: 'छाती की जकड़न और श्वसन ऐंठन के लिए उन्नत कफ सिरप।',
        composition: 'लेवोसल्बुटामोल 1mg + एम्ब्रोक्सोल 30mg + गुआइफेनेसिन 50mg / 5ml',
        indications: 'गीली खांसी, छाती में जकड़न, अस्थमा जैसी ब्रोंकाइटिस और सांस नली की ऐंठन से राहत।',
        benefits: 'लेवोसल्बुटामोल बिना घबराहट या उच्च हृदय गति के सांस की नली को आराम देता है। एम्ब्रोक्सोल बलगम को पिघलाता है और गुआइफेनेसिन छाती से चिपचिपी बलगम साफ करता है।',
        dosage: 'वयस्क: 5-10 ml दिन में तीन बार। बच्चे: बाल रोग विशेषज्ञ के निर्देशानुसार।',
        storage: '25°C से कम तापमान पर सूखी जगह पर रखें। रोशनी से बचाएं।',
        packaging: '100ml बोतल'
      },
      mr: {
        category: 'श्वसन संस्था',
        description: 'छातीच्या जकडणेसाठी आणि खोकल्यासाठी प्रगत कफ सिरप.',
        composition: 'लेव्होसाल्ब्युटामॉल १ मिग्रॅ + अॅम्ब्रोक्सॉल ३० मिग्रॅ + ग्विफेनेसिन ५० मिग्रॅ / ५ मिली',
        indications: 'ओला खोकला, छातीतील जकडण, दम्याशी संबंधित ब्रॉन्कायटिस आणि श्वासवाहिन्यांच्या आकुंचनापासून आराम.',
        benefits: 'लेव्होसाल्ब्युटामॉल हृदयाचे ठोके न वाढवता श्वासवाहिन्यांना आराम देते. अॅम्ब्रोक्सॉल कफ पातळ करतो आणि ग्विफेनेसिन छातीतील दाट जकडण साफ करतो.',
        dosage: 'प्रौढ: ५-१० मिली दिवसातून तीन वेळा. मुले: बालरोगतज्ज्ञांच्या सल्ल्यानुसार.',
        storage: '25°C पेक्षा कमी तापमानात कोरड्या जागी साठवा. प्रकाशापासून संरक्षण करा.',
        packaging: '१०० मिली बाटली'
      }
    }
  },
  {
    name: 'DAZER-CV',
    category: 'Antibiotics',
    categorySlug: 'antibiotics',
    slug: 'dazer-cv',
    composition: 'Cefpodoxime Proxetil 200mg and Potassium Clavulanate 125mg',
    ingredients: ['Cefpodoxime Proxetil', 'Clavulanic Acid'],
    description: 'Double-action beta-lactam antibiotic designed to overcome bacterial resistance.',
    indications: 'Severe bacterial infections including sinusitis, urinary tract infections, severe respiratory infections, and soft tissue infections.',
    benefits: 'Cefpodoxime destroys bacterial cell wall replication. Potassium Clavulanate deactivates bacterial beta-lactamase enzymes, restoring the potency of Cefpodoxime against drug-resistant strains.',
    dosage: 'One tablet twice daily after meals for 5 to 10 days, or as directed by your physician.',
    storage: 'Store below 25°C in a dry place. Protect from heat and moisture.',
    packaging: '10 x 6 Alu-Alu Pack',
    color: '#EA580C',
    accent: '#FFEDD5',
    image: resolveProductImage('dazer-cv', 'DAZER-CV.png'),
    imageAlt: 'DAZER-CV tablet pack',
    translations: {
      hi: {
        category: 'एंटिबॉयोटिक्स',
        description: 'दवा-प्रतिरोधी बैक्टीरिया के खिलाफ प्रभावी दोहरी-शक्ति वाला एंटीबायोटिक टैबलेट।',
        composition: 'सेफ्पोडोक्साइम प्रोक्सेटिल 200mg और पोटेशियम क्लावुलानेट 125mg',
        indications: 'गंभीर जीवाणु संक्रमण जैसे साइनसाइटिस, मूत्र मार्ग में संक्रमण, गंभीर छाती संक्रमण और त्वचा के संक्रमण।',
        benefits: 'सेफ्पोडोक्साइम बैक्टीरिया की दीवारों को तोड़कर उन्हें नष्ट करता है। पोटेशियम क्लावुलानेट बैक्टीरिया को एंटीबायोटिक को निष्क्रिय करने से रोकता है, जिससे यह प्रतिरोधी बैक्टीरिया पर भी असर करता है।',
        dosage: 'भोजन के बाद दिन में दो बार एक टैबलेट, 5-10 दिनों के लिए या डॉक्टर के अनुसार।',
        storage: '25°C से कम तापमान पर सूखी जगह पर रखें। गर्मी और नमी से बचाएं।',
        packaging: '10 x 6 एल्यु-एल्यु पैक'
      },
      mr: {
        category: 'अँटीबायोटिक्स',
        description: 'औषध-प्रतिरोधक जिवाणूंविरुद्ध प्रभावी दुहेरी-शक्तीची अँटीबायोटिक टॅब्लेट.',
        composition: 'सेफ्पोडोक्झाईम प्रॉक्सेटिल २०० मिग्रॅ आणि पोटॅशियम क्लॅव्हुलानेट १२५ मिग्रॅ',
        indications: 'सायनुसायटिस, मूत्रमार्गाचे संसर्ग, छातीचे तीव्र संसर्ग आणि त्वचेचे संसर्ग यांसारखे तीव्र जिवाणू संसर्ग.',
        benefits: 'सेफ्पोडोक्झाईम जिवाणू पेशींची भिंत नष्ट करते. पोटॅशियम क्लॅव्हुलानेट जिवाणूंना प्रतिप्रतिजैविक निष्क्रिय करण्यापासून रोखते, ज्यामुळे प्रतिरोधक जिवाणूंवरही हा उपाय प्रभावी ठरतो.',
        dosage: 'जेवणानंतर दिवसातून दोनदा एक टॅब्लेट, ५ ते १० दिवसांसाठी किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: '25°C पेक्षा कमी तापमानात कोरड्या जागी साठवा. उष्णता आणि ओलाव्यापासून संरक्षण करा.',
        packaging: '10 x 6 अ‍ॅ्यु-अ‍ॅ्यु पॅक'
      }
    }
  },
  {
    name: 'KSHITIZ',
    category: 'Tablets',
    categorySlug: 'tablets',
    slug: 'kshitiz-tablet',
    composition: 'Protein Hydrolysate, Multivitamins, Essential Minerals and Antioxidants',
    ingredients: ['Protein Hydrolysate', 'Multivitamins', 'Minerals', 'Antioxidants'],
    description: 'Premium daily health, prenatal, and growth booster supplement.',
    indications: 'Nutritional deficiencies, recovery during illness, pregnancy/lactation, weak immunity, and lack of energy.',
    benefits: 'Replenishes daily vitamins and minerals, builds immune response, ensures fetal development during pregnancy, and reduces fatigue by enhancing cellular metabolism.',
    dosage: 'One tablet daily after meals (preferably breakfast), or as recommended by the physician.',
    storage: 'Store in a cool, dry, dark place. Protect from heat and moisture.',
    packaging: '10 x 10 Blister Pack',
    color: '#0F766E',
    accent: '#CCFBF1',
    image: resolveProductImage('kshitiz-tablet', 'KSHITIZ image.png'),
    imageAlt: 'KSHITIZ tablet pack',
    translations: {
      hi: {
        category: 'टैबलेट्स',
        description: 'प्रतिरोधक क्षमता और सामान्य कमजोरी के लिए प्रीमियम मल्टीविटामिन और खनिज टैबलेट।',
        composition: 'प्रोटीन हाइड्रोलाइजेट, मल्टीविटामिन, आवश्यक खनिज और एंटीऑक्सीडेंट',
        indications: 'पोषण की कमी, कमजोरी, बीमारी के बाद रिकवरी, गर्भावस्था में सहायता और कम इम्युनिटी।',
        benefits: 'दैनिक विटामिन की कमी को पूरा करता है, शरीर को ऊर्जा देता है, गर्भावस्था में भ्रूण के स्वास्थ्य को सुनिश्चित करता है और प्रतिरक्षा प्रणाली को मजबूत करता है।',
        dosage: 'भोजन के बाद रोजाना एक टैबलेट, या डॉक्टर के निर्देशानुसार।',
        storage: 'ठंडी, सूखी और अंधेरी जगह पर रखें। नमी से बचाएं।',
        packaging: '10 x 10 ब्लिस्टर पैक'
      },
      mr: {
        category: 'टॅब्लेट्स',
        description: 'प्रतिकारशक्ती आणि शारीरिक थकव्यासाठी प्रगत मल्टिव्हिटॅमिन आणि खनिज टॅब्लेट.',
        composition: 'प्रथिने हायड्रोलायझेट, जीवनसत्त्वे, आवश्यक खनिजे आणि अँटीऑक्सिडंट्स',
        indications: 'पोषणाची कमतरता, थकवा, आजारपणानंतरची रिकव्हरी, गर्भधारणा आणि अशक्तपणा.',
        benefits: 'दररोज लागणारी जीवनसत्त्वे पूर्ण करते, शरीरातील ऊर्जेचे प्रमाण वाढवते, गर्भधारणेदरम्यान बाळाच्या विकासाला मदत करते आणि रोगप्रतिकारशक्ती वाढवते.',
        dosage: 'जेवणानंतर दररोज एक टॅब्लेट, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: 'थंड, कोरड्या आणि अंधाऱ्या जागी साठवा. उष्णता आणि ओलाव्यापासून लांब ठेवा.',
        packaging: '10 x 10 ब्लिस्टर पॅक'
      }
    }
  },
  {
    name: 'KSHITIZ Syrup',
    category: 'Syrups',
    categorySlug: 'syrups',
    slug: 'kshitiz-syrup',
    composition: 'Cyproheptadine HCl 2mg + Tricholine Citrate 275mg / 5ml',
    ingredients: ['Cyproheptadine', 'Tricholine Citrate'],
    description: 'Dual-action appetite booster and liver protectant suspension.',
    indications: 'Loss of appetite, sluggish digestion, pediatric undernutrition, and fatty liver infiltration support.',
    benefits: 'Cyproheptadine stimulates the satiety center in the brain to boost appetite. Tricholine Citrate promotes bile acid mobilization, reduces fat deposition in the liver, and improves overall hepatic health.',
    dosage: 'Adults: 10ml twice daily before meals. Children: 5ml twice daily before meals, or as advised by a doctor.',
    storage: 'Store in a dark, cool place. Do not freeze. Keep bottle tightly closed.',
    packaging: '200ml Amber Bottle',
    color: '#16A34A',
    accent: '#DCFCE7',
    image: resolveProductImage('kshitiz-syrup', 'Kshitiz 200ml img 3.png'),
    imageAlt: 'KSHITIZ syrup bottle',
    translations: {
      hi: {
        category: 'सिरप',
        description: 'भूख बढ़ाने और लिवर को सुरक्षित रखने वाला स्वादिष्ट सिरप।',
        composition: 'सिप्रोहेप्टाडाइन 2mg + ट्राइकोलिन साइट्रेट 275mg / 5ml',
        indications: 'भूख न लगना, सुस्त पाचन, बच्चों में कुपोषण और फैटी लिवर की समस्या।',
        benefits: 'सिप्रोहेप्टाडाइन मस्तिष्क में भूख के केंद्र को उत्तेजित करता है। ट्राइकोलिन साइट्रेट लिवर से अतिरिक्त फैट को हटाता है और लिवर की कार्यक्षमता को बढ़ाता है।',
        dosage: 'वयस्क: भोजन से पहले 10ml दिन में दो बार। बच्चे: भोजन से पहले 5ml दिन में दो बार, या डॉक्टर के अनुसार।',
        storage: 'ठंडी और अंधेरी जगह पर रखें। फ्रीज न करें। बोतल कसकर बंद रखें।',
        packaging: '200ml बोतल'
      },
      mr: {
        category: 'सिरप',
        description: 'भूक वाढवणारे आणि लिव्हर निरोगी ठेवणारे सिरप.',
        composition: 'सायप्रोहेप्टाडिन २ मिग्रॅ + ट्रायकोलिन सायट्रेट २७५ मिग्रॅ / ५ मिली',
        indications: 'भूक कमी होणे, अपचन, मुलांमधील कुपोषण आणि फॅटी लिव्हरची समस्या.',
        benefits: 'सायप्रोहेप्टाडिन मेंदूतील भूक केंद्राला उत्तेजित करून भूक वाढवते. ट्रायकोलिन सायट्रेट लिव्हरमधील चरबीचे संचय कमी करते आणि यकृताचे कार्य सुधारते.',
        dosage: 'प्रौढ: जेवणापूर्वी १० मिली दिवसातून दोनदा. मुले: जेवणापूर्वी ५ मिली दिवसातून दोनदा, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: 'थंड आणि कोरड्या ठिकाणी ठेवा. गोठवू नका. बाटली घट्ट बंद ठेवा.',
        packaging: '२०० मिली बाटली'
      }
    }
  },
  {
    name: 'KSHITIZ GRO',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    slug: 'kshitiz-gro',
    composition: 'Balanced Health Protein Powder with DHA, Whey Protein, Vitamins and Minerals',
    ingredients: ['Whey Protein Concentrate', 'DHA', 'Vitamins A, B, C, D3, E', 'Calcium', 'Iron', 'Zinc'],
    description: 'High-protein nutritional supplement for muscle growth, energy, and child brain development.',
    indications: 'Growing children (immunity & height), recovery during convalescence, sports nutrition, and general nutritional gaps in adults.',
    benefits: 'Whey protein builds muscle tissue and strength. DHA supports active brain development and visual acuity. Calcium, Vitamin D3, and minerals enhance skeletal structure and joint strength.',
    dosage: 'Add 2-3 tablespoons of Kshitiz Gro to a glass of lukewarm milk or water. Mix well. Consume once or twice daily.',
    storage: 'Keep container tightly closed. Store in a cool, dry place. Do not introduce wet spoons.',
    packaging: '200g Protective Airtight Jar',
    color: '#CA8A04',
    accent: '#FEF3C7',
    image: resolveProductImage('kshitiz-gro', 'Kshitiz Gro.png'),
    imageAlt: 'KSHITIZ GRO jar',
    translations: {
      hi: {
        category: 'न्यूट्रास्युटिकल्स',
        description: 'बच्चों के मानसिक विकास और ऊर्जा के लिए डीएचए युक्त उच्च प्रोटीन पाउडर।',
        composition: 'मट्ठा प्रोटीन (Whey), डीएचए (DHA), विटामिन और खनिजों से युक्त संतुलित पूरक',
        indications: 'बढ़ते बच्चे (प्रतिरोधक क्षमता और विकास), बीमारी के बाद कमजोरी, और वयस्कों में पोषक तत्वों की कमी।',
        benefits: 'मट्ठा प्रोटीन मांसपेशियों को शक्ति प्रदान करता है। डीएचए बच्चों के मस्तिष्क और आंखों के विकास में मदद करता है। कैल्शियम और विटामिन डी हड्डियों को मजबूत बनाते हैं।',
        dosage: 'एक गिलास गुनगुने दूध या पानी में 2-3 चम्मच पाउडर मिलाएं। दिन में एक या दो बार सेवन करें।',
        storage: 'जार को कसकर बंद रखें। ठंडी और सूखी जगह पर रखें। नमी से बचाएं।',
        packaging: '200g वायुरोधी जार'
      },
      mr: {
        category: 'न्युट्रास्युटिकल्स',
        description: 'लहान मुलांच्या मानसिक विकासासाठी आणि ऊर्जेसाठी डीएचए (DHA) युक्त उच्च प्रोटीन पावडर.',
        composition: 'व्हे प्रोटीन, डीएचए, जीवनसत्त्वे आणि खनिजे यांचे संतुलित मिश्रण',
        indications: 'वाढत्या वयातील मुले (रोगप्रतिकारक शक्ती आणि विकास), आजारपणानंतरचा अशक्तपणा आणि पोषण कमतरता.',
        benefits: 'व्हे प्रोटीन स्नायूंचे संवर्धन करते. डीएचए मेंदूच्या कार्यक्षमतेला आणि दृष्टीला चालना देते. कॅल्शियम आणि खनिजे हाडांना मजबूत करतात.',
        dosage: 'एक ग्लास कोमट दुधात किंवा पाण्यात २-३ चमचे पावडर मिसळून घ्या. दिवसातून एकदा किंवा दोनदा प्या.',
        storage: 'भांडे घट्ट बंद ठेवा. थंड व कोरड्या जागी ठेवा. ओले चमचे वापरू नका.',
        packaging: '२०० ग्रॅम हवाबंद जार'
      }
    }
  },
  {
    name: 'NEURAYA',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    slug: 'neuraya',
    composition: 'Methylcobalamin 1500 mcg + Alpha Lipoic Acid 100mg + Pyridoxine HCl 3mg + Folic Acid 1.5mg + Vitamin D3 1000 IU',
    ingredients: ['Methylcobalamin', 'Alpha Lipoic Acid', 'Pyridoxine', 'Folic Acid', 'Vitamin D3'],
    description: 'Premier neurotropic and neuropathy management formulation.',
    indications: 'Peripheral neuropathy, diabetic neuropathy, sciatic nerve pain, tingling/numbness, and B-vitamin deficiencies.',
    benefits: 'Methylcobalamin heals damaged nerve endings by synthesizing the myelin sheath. Alpha Lipoic Acid acts as a powerful universal antioxidant protecting nerves from high-sugar damage. Pyridoxine, Folic Acid, and D3 regulate nerve conduction and blood count.',
    dosage: 'One tablet daily, preferably after dinner, or as directed by your neurologist.',
    storage: 'Store below 25°C in a dry place. Protect from heat and direct sunlight.',
    packaging: '10 x 10 Alu-Alu Pack',
    color: '#C026D3',
    accent: '#FAE8FF',
    image: resolveProductImage('neuraya', 'NEURAYA.png'),
    imageAlt: 'NEURAYA tablet pack',
    translations: {
      hi: {
        category: 'न्यूट्रास्युटिकल्स',
        description: 'नसों के दर्द, सुन्नपन और कमजोरी के लिए सर्वश्रेष्ठ न्यूरोपैथी मैनेजमेंट टैबलेट।',
        composition: 'मिथाइलकोबालामिन 1500 mcg + अल्फा लिपोइक एसिड 100mg + पाइरिडोक्सिन 3mg + फोलिक एसिड 1.5mg + विटामिन D3 1000 IU',
        indications: 'डायबिटिक न्यूरोपैथी, साइटिका का दर्द, हाथों-पैरों का सुन्न होना, नसों की कमजोरी और विटामिन बी12 की कमी।',
        benefits: 'मिथाइलकोबालामिन खराब नसों की मरम्मत करता है। अल्फा लिपोइक एसिड एक शक्तिशाली एंटीऑक्सीडेंट है जो हाई शुगर से नसों को होने वाले नुकसान से बचाता है। विटामिन डी3 नसों के सिग्नलों को तेज करता है।',
        dosage: 'रोजाना एक टैबलेट, रात के भोजन के बाद, या डॉक्टर की सलाह के अनुसार।',
        storage: '25°C से कम तापमान पर सूखी जगह पर रखें। धूप और गर्मी से बचाएं।',
        packaging: '10 x 10 एल्यु-एल्यु पैक'
      },
      mr: {
        category: 'न्युट्रास्युटिकल्स',
        description: 'मज्जातंतूंच्या वेदना, सुन्नपणा आणि अशक्तपणासाठी प्रगत न्यूरोपॅथी व्यवस्थापन टॅब्लेट.',
        composition: 'मिथाइलकोबालामिन १५०० एमसीजी + अल्फा लिपोइक ॲसिड १०० मिग्रॅ + पायरिडॉक्सिन ३ मिग्रॅ + फॉलिक ॲसिड १.५ मिग्रॅ + व्हिटॅमिन डी३ १००० आययू',
        indications: 'डायबेटिक न्यूरोपॅथी, सायटिकाच्या वेदना, हात-पाय सुन्न होणे आणि व्हिटॅमिन बी१२ ची कमतरता.',
        benefits: 'मिथाइलकोबालामिन खराब झालेल्या मज्जातंतूंची दुरुस्ती करते. अल्फा लिपोइक ॲसिड हे अँटीऑक्सिडंट असून ते नसांचे रक्षण करते. व्हिटॅमिन डी३ नसांच्या कार्यात सुधारणा करते.',
        dosage: 'दररोज एक टॅब्लेट, शक्यतो रात्रीच्या जेवणानंतर, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: '25°C पेक्षा कमी तापमानात कोरड्या जागी साठवा. प्रकाशापासून दूर ठेवा.',
        packaging: '10 x 10 अ‍ॅ्यु-अ‍ॅ्यु पॅक'
      }
    }
  },
  {
    name: 'PANAYA-40',
    category: 'Gastro',
    categorySlug: 'gastro',
    slug: 'panaya-40',
    composition: 'Pantoprazole Sodium Gastro-Resistant 40mg',
    ingredients: ['Pantoprazole Sodium'],
    description: 'Fast-acting, selective proton pump inhibitor (PPI) for stomach acid reduction.',
    indications: 'Gastroesophageal Reflux Disease (GERD), acid peptic ulcers, Zollinger-Ellison syndrome, and drug-induced gastric erosion.',
    benefits: 'Binds to proton pumps in the stomach wall, halting active acid secretion. Relieves chest heartburn, regurgitation, and stomach pain with a sustained 24-hour effect.',
    dosage: 'One tablet daily in the morning, 30 to 60 minutes before breakfast. Swallow whole; do not crush or chew.',
    storage: 'Store in a dry place below 30°C. Keep out of reach of children.',
    packaging: '10 x 10 Alu-Alu Pack',
    color: '#0284C7',
    accent: '#E0F2FE',
    image: resolveProductImage('panaya-40', 'PANAYA-40.png'),
    imageAlt: 'PANAYA-40 tablet pack',
    translations: {
      hi: {
        category: 'गैस्ट्रो / पेट रोग',
        description: 'गंभीर एसिडिटी, सीने में जलन और पेट के छालों से त्वरित राहत दिलाने वाली टैबलेट।',
        composition: 'पेंटोप्राजोल सोडियम गैस्ट्रो-रेसिस्टेंट 40mg',
        indications: 'एसिड रिफ्लक्स (GERD), पेट के अल्सर, खट्टी डकारें आना और दर्द निवारक दवाओं से होने वाली गैस।',
        benefits: 'यह टैबलेट पेट में अतिरिक्त एसिड का निर्माण रोकती है, जिससे सीने में जलन, गले में खट्टा पानी आने और गैस के दर्द से 24 घंटे आराम मिलता है।',
        dosage: 'सुबह खाली पेट, नाश्ते से 30-60 मिनट पहले एक टैबलेट। टैबलेट को साबुत निगलें, चबाएं नहीं।',
        storage: 'सूखी जगह पर 30°C से कम तापमान पर रखें। बच्चों की पहुंच से दूर रखें।',
        packaging: '10 x 10 एल्यु-एल्यु पैक'
      },
      mr: {
        category: 'गॅस्ट्रो / पोटाचे विकार',
        description: 'तीव्र ॲसिडिटी, छातीतील जळजळ आणि पोटातील अल्सरपासून जलद आराम देणारी टॅब्लेट.',
        composition: 'पँटोप्राझोल सोडियम गॅस्ट्रो-रेझिस्टंट ४० मिग्रॅ',
        indications: 'ॲसिड रिफ्लक्स (GERD), पोटातील अल्सर, आंबट ढेकर येणे आणि इतर औषधांमुळे होणारी जळजळ.',
        benefits: 'पोटातील अतिरिक्त ॲसिड निर्मितीला थांबवते, ज्यामुळे छातीतील जळजळ आणि अपचनापासून २४ तासांपर्यंत आराम मिळतो.',
        dosage: 'सकाळी रिकाम्या पोटी, न्याहारीपूर्वी ३०-६० मिनिटे एक टॅब्लेट. चघळू किंवा तोडू नका, पूर्ण गिळा.',
        storage: '30°C पेक्षा कमी तापमानात कोरड्या जागी साठवा. मुलांच्या हाताला लागणार नाही अशा जागी ठेवा.',
        packaging: '10 x 10 अ‍ॅ्यु-अ‍ॅ्यु पॅक'
      }
    }
  },
  {
    name: 'PANAYA-40 DSR',
    category: 'Gastro',
    categorySlug: 'gastro',
    slug: 'panaya-40-dsr',
    composition: 'Pantoprazole Sodium 40mg + Domperidone Sustained Release 30mg',
    ingredients: ['Pantoprazole Sodium', 'Domperidone'],
    description: 'Dual-action anti-acidity and anti-emetic gastro capsules.',
    indications: 'GERD, dyspepsia associated with delayed gastric emptying, hyperacidity with nausea or vomiting, and reflux esophagitis.',
    benefits: 'Pantoprazole prevents gastric acid secretion. Domperidone acts as a prokinetic agent, increasing upper GI tract motility to clear nausea and prevent acid reflux from traveling upward.',
    dosage: 'One capsule daily in the morning, 30 minutes before breakfast, or as directed by a gastroenterologist.',
    storage: 'Store below 25°C. Protect from light, heat, and moisture.',
    packaging: '10 x 10 Alu-Alu Capsule Strip',
    color: '#F97316',
    accent: '#FFEDD5',
    image: resolveProductImage('panaya-40-dsr', 'PANAYA-DSR.png'),
    imageAlt: 'PANAYA-40 DSR pack',
    translations: {
      hi: {
        category: 'गैस्ट्रो / पेट रोग',
        description: 'उल्टी, मतली और गंभीर गैस-एसिडिटी को नियंत्रित करने वाले ड्यूअल-एक्शन कैप्सूल।',
        composition: 'पेंटोप्राजोल सोडियम 40mg और डोमपेरिडोन सस्टेन्ड रिलीज 30mg',
        indications: 'गंभीर एसिड रिफ्लक्स, खट्टी डकारें आना, उल्टी जैसा महसूस होना, और पेट फूलना।',
        benefits: 'पेंटोप्राजोल पेट में एसिड को बनने से रोकता है। डोमपेरिडोन पेट की गति को सही करता है, जिससे उल्टी और घबराहट शांत होती है और एसिड वापस भोजन नली में नहीं आता।',
        dosage: 'सुबह खाली पेट, नाश्ते से 30 मिनट पहले एक कैप्सूल लें।',
        storage: '25°C से कम तापमान पर रखें। रोशनी, गर्मी और नमी से बचाएं।',
        packaging: '10 x 10 एल्यु-एल्यु कैप्सूल स्ट्रिप'
      },
      mr: {
        category: 'गॅस्ट्रो / पोटाचे विकार',
        description: 'उलटी, मळमळ आणि तीव्र गॅस-ॲसिडिटी नियंत्रित करणारे ड्युअल-ॲक्शन कॅप्सूल.',
        composition: 'पँटोप्राझोल सोडियम ४० मिग्रॅ आणि डोम्पेरिडोन सस्टेन्ड रिलीज ३० मिग्रॅ',
        indications: 'ॲसिड रिफ्लक्स, जळजळ, मळमळ किंवा उलटीचा त्रास आणि अपचन.',
        benefits: 'पँटोप्राझोल ॲसिड निर्मिती रोखते. डोम्पेरिडोन पोटाच्या स्नायूंना गती देते, ज्यामुळे मळमळ थांबते आणि ॲसिड अन्ननलिकेत परत येत नाही.',
        dosage: 'सकाळी रिकाम्या पोटी, न्याहारीपूर्वी ३० मिनिटे एक कॅप्सूल घ्या.',
        storage: '25°C पेक्षा कमी तापमानात साठवा. प्रकाश, उष्णता आणि ओलाव्यापासून संरक्षण करा.',
        packaging: '10 x 10 अ‍ॅ्यु-अ‍ॅ्यु कॅप्सूल स्ट्रिप'
      }
    }
  },
  {
    name: 'PANAYA-OS',
    category: 'Syrups',
    categorySlug: 'syrups',
    slug: 'panaya-os',
    composition: 'Sucralfate 1g and Oxetacaine 20mg / 10ml Suspension',
    ingredients: ['Sucralfate', 'Oxetacaine'],
    description: 'Anesthetic and cytoprotective oral gel for ulcer healing and instant pain relief.',
    indications: 'Acute peptic ulcer, active duodenal ulcer, stomach lining inflammation (gastritis), and severe esophageal reflux pain.',
    benefits: 'Sucralfate creates a physical protective gel layer over inflamed tissues and ulcers, aiding natural repair. Oxetacaine acts as a potent local anesthetic, rapidly numbing the stomach lining to relieve ulcer pain.',
    dosage: '10ml four times daily (1 hour before major meals and at bedtime), or as directed by your physician. Shake well.',
    storage: 'Store below 30°C. Do not freeze. Keep container tightly closed.',
    packaging: '200ml Mint Suspension Bottle',
    color: '#0369A1',
    accent: '#E0F2FE',
    image: resolveProductImage('panaya-os', 'PANAYA-OS.png'),
    imageAlt: 'PANAYA-OS bottle',
    translations: {
      hi: {
        category: 'सिरप',
        description: 'पेट के छालों को ठीक करने और दर्द से तुरंत राहत दिलाने वाला ओरल सस्पेंशन।',
        composition: 'सुक्रालफेट 1g और ऑक्सेटाकेन 20mg / 10ml सस्पेंशन',
        indications: 'पेप्टिक अल्सर, पेट की अंदरूनी सूजन (गैस्ट्राइटिस) और गंभीर सीने की जलन का दर्द।',
        benefits: 'सुक्रालफेट छालों और सूजे हुए हिस्सों पर एक सुरक्षात्मक परत बनाता है जिससे घाव जल्दी भरते हैं। ऑक्सेटाकेन एक स्थानीय एनेस्थेटिक है जो तुरंत दर्द वाले हिस्से को सुन्न कर आराम देता है।',
        dosage: 'भोजन से 1 घंटे पहले और सोते समय 10ml (दिन में चार बार), या डॉक्टर के अनुसार। अच्छी तरह हिलाएं।',
        storage: '30°C से कम तापमान पर रखें। फ्रीज न करें। बोतल कसकर बंद रखें।',
        packaging: '200ml मिंट-फ्लेवर सस्पेंशन बोतल'
      },
      mr: {
        category: 'सिरप',
        description: 'पोटातील अल्सर बरे करणारे आणि वेदनेपासून त्वरित आराम देणारे ओरल सस्पेंशन.',
        composition: 'सुक्राल्फेट १ ग्रॅम आणि ऑक्सिटाकेन २० मिग्रॅ / १० मिली सस्पेंशन',
        indications: 'पेप्टिक अल्सर, गॅस्ट्रायटिस (पोटातील सूज) आणि छातीतील तीव्र जळजळीमुळे होणाऱ्या वेदना.',
        benefits: 'सुक्राल्फेट सूज आलेल्या भागावर आणि अल्सरवर एक संरक्षक थर तयार करते ज्यामुळे जखम लवकर बरी होते. ऑक्सिटाकेन वेदना जाणवणाऱ्या भागाला त्वरित बधीर करून वेदनेपासून सुटका करते.',
        dosage: 'जेवणापूर्वी १ तास आणि झोपताना १० मिली (दिवसातून चार वेळा), किंवा डॉक्टरांच्या सल्ल्यानुसार. वापरण्यापूर्वी बाटली व्यवस्थित हिलावून घ्या.',
        storage: '30°C पेक्षा कमी तापमानात साठवा. गोठवू नका. बाटली व्यवस्थित बंद ठेवा.',
        packaging: '२०० मिली मिंट-फ्लेवर सस्पेंशन बाटली'
      }
    }
  },
  {
    name: 'SNOFREEZ',
    category: 'Cold & Cough',
    categorySlug: 'cold-cough',
    slug: 'snofreez',
    composition: 'Aceclofenac 100mg + Paracetamol 325mg + Phenylephrine HCl 5mg + Cetirizine HCl 5mg',
    ingredients: ['Aceclofenac', 'Paracetamol', 'Phenylephrine', 'Cetirizine'],
    description: 'Quad-action cold, decongestant, analgesic, and antihistaminic tablet.',
    indications: 'Symptomatic relief of common cold, seasonal flu, sinus headaches, nasal congestion, runny nose, and related body aches.',
    benefits: 'Aceclofenac and Paracetamol rapidly combat fever and body pains. Phenylephrine clears blocked nasal passages. Cetirizine blocks histamine receptors, stopping runny nose, watery eyes, and continuous sneezing.',
    dosage: 'One tablet twice or thrice daily after meals, or as recommended by your physician.',
    storage: 'Store in a cool, dry place. Protect from heat, direct light, and moisture.',
    packaging: '10 x 10 Blister Pack',
    color: '#0EA5E9',
    accent: '#E0F2FE',
    image: resolveProductImage('snofreez', 'SNOFREEZ.png'),
    imageAlt: 'SNOFREEZ tablet pack',
    translations: {
      hi: {
        category: 'सर्दी और खांसी',
        description: 'सर्दी, बंद नाक, सिरदर्द, बुखार और बदन दर्द के लिए चार-कार्यों वाली टैबलेट।',
        composition: 'एसेक्लोफेनाक 100mg + पैरासिटामोल 325mg + फेनिलफ्रीन 5mg + सेटिरिजिन 5mg',
        indications: 'सामान्य सर्दी, फ्लू के लक्षण, साइनस का दर्द, बहती नाक, छींक आना और बुखार के साथ बदन दर्द।',
        benefits: 'एसेक्लोफेनाक और पैरासिटामोल दर्द और बुखार को मिटाते हैं। फेनिलफ्रीन बंद नाक को खोलती है। सेटिरिजिन छींकने, बहती नाक और एलर्जी के लक्षणों को समाप्त करती है।',
        dosage: 'भोजन के बाद दिन में दो या तीन बार एक टैबलेट, या डॉक्टर के निर्देशानुसार।',
        storage: 'सूखी और ठंडी जगह पर रखें। गर्मी, धूप और नमी से बचाएं।',
        packaging: '10 x 10 ब्लिस्टर पैक'
      },
      mr: {
        category: 'सर्दी आणि खोकला',
        description: 'सर्दी, बंद नाक, डोकेदुखी, ताप आणि शरीरदुखीसाठी चार-कार्यांची टॅब्लेट.',
        composition: 'अॅसेक्लोफेनाक १०० मिग्रॅ + पॅरासिटामॉल ३२५ मिग्रॅ + फेनिलफ्रीन ५ मिग्रॅ + सेटिरिजिन ५ मिग्रॅ',
        indications: 'सामान्य सर्दी, फ्लूची लक्षणे, सायनस डोकेदुखी, बंद नाक, वाहणारे नाक आणि शिंका येणे.',
        benefits: 'अॅसेक्लोफेनाक आणि पॅरासिटामॉल ताप आणि अंगदुखी कमी करतात. फेनिलफ्रीन बंद नाक उघडते. सेटिरिजिन वाहणारे नाक, डोळ्यातून पाणी येणे आणि शिंका येणे थांबवते.',
        dosage: 'जेवणानंतर दिवसातून दोन ते तीन वेळा एक टॅब्लेट, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: 'थंड आणि कोरड्या ठिकाणी साठवा. उष्णता, थेट प्रकाश आणि ओलाव्यापासून संरक्षण करा.',
        packaging: '10 x 10 ब्लिस्टर पॅक'
      }
    }
  },
  {
    name: 'UPSTRIN FORTE',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    slug: 'upstrin-forte',
    composition: 'Methylcobalamin 1500mcg + L-Methylfolate Calcium 1mg + Pyridoxal-5-Phosphate 0.5mg + Vitamin D3 1000 IU',
    ingredients: ['Methylcobalamin', 'L-Methylfolate Calcium', 'Pyridoxal-5-Phosphate', 'Vitamin D3'],
    description: 'Active coenzyme form of B-complex vitamins for superior neurological and red blood cell health.',
    indications: 'Management of peripheral neuropathies, cardiovascular support (reduces homocysteine), active folate deficiency, and bone-nerve integration.',
    benefits: 'Uses L-Methylfolate and Pyridoxal-5-Phosphate (the active forms of Folic Acid and Vitamin B6), bypassing liver conversion for direct cellular absorption. Methylcobalamin regenerates nerves, and Vitamin D3 supports muscle strength.',
    dosage: 'One tablet daily with water after breakfast, or as advised by your healthcare specialist.',
    storage: 'Store below 25°C in a dry place. Keep container tightly closed.',
    packaging: '10 x 10 Alu-Alu Pack',
    color: '#7C3AED',
    accent: '#EDE9FE',
    image: resolveProductImage('upstrin-forte', 'Methyclodbalamin,Alpha pck 1tab.png'),
    imageAlt: 'UPSTRIN FORTE tablet pack',
    translations: {
      hi: {
        category: 'न्यूट्रास्युटिकल्स',
        description: 'नसों के स्वास्थ्य और खून की कमी को दूर करने के लिए एक्टिव फॉर्म विटामिन टैबलेट।',
        composition: 'मिथाइलकोबालामिन 1500mcg + एल-मिथाइलफोलेट कैल्शियम 1mg + पाइरिडोक्सल-5-फॉस्फेट 0.5mg + विटामिन D3 1000 IU',
        indications: 'नसों की कमजोरी, हृदय स्वास्थ्य में सुधार, रक्त की कमी और सक्रिय विटामिन बी की कमी।',
        benefits: 'इसमें फोलेट और बी6 के सक्रिय रूप (L-Methylfolate और P-5-P) हैं जो बिना लिवर रूपांतरण के सीधे शरीर में समा जाते हैं। यह नसों को स्वस्थ रखता है और कोशिकाओं को सक्रिय करता है।',
        dosage: 'नाश्ते के बाद रोजाना एक टैबलेट, या डॉक्टर के निर्देशानुसार।',
        storage: '25°C से कम तापमान पर सूखी जगह पर रखें। जार को अच्छी तरह बंद रखें।',
        packaging: '10 x 10 एल्यु-एल्यु पैक'
      },
      mr: {
        category: 'न्युट्रास्युटिकल्स',
        description: 'मज्जातंतूंचे आरोग्य आणि रक्ताची कमतरता दूर करण्यासाठी प्रगत को-एंझाईम जीवनसत्त्व टॅब्लेट.',
        composition: 'मिथाइलकोबालामिन १५०० एमसीजी + एल-मिथाइलफोलेट कॅल्शियम १ मिग्रॅ + पायरिडॉक्सल-५-फॉस्फेट ०.५ मिग्रॅ + व्हिटॅमिन डी३ १००० आययू',
        indications: 'मज्जातंतूंची कमजोरी, हृदयविकारांपासून संरक्षण, अशक्तपणा आणि बी-जीवनसत्त्वांची कमतरता.',
        benefits: 'यात फॉलिक ॲसिड आणि बी६ चे थेट शोषले जाणारे सक्रिय रूप वापरले आहे. मज्जातंतूंच्या दुरुस्तीला वेग देते आणि हाडांना ताकद देते.',
        dosage: 'न्याहारीनंतर दररोज एक टॅब्लेट पाण्यासोबत घ्या, किंवा डॉक्टरांच्या सल्ल्यानुसार.',
        storage: '25°C पेक्षा कमी तापमानात कोरड्या जागी साठवा. भांडे व्यवस्थित बंद ठेवा.',
        packaging: '10 x 10 अ‍ॅ्यु-अ‍ॅ्यु पॅक'
      }
    }
  },
];
