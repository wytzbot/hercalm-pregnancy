const COUNTRY_DATA = {
  ng: { name: "Nigeria", flag: "🇳🇬" },
  us: { name: "United States", flag: "🇺🇸" },
  uk: { name: "United Kingdom", flag: "🇬🇧" },
  default: { name: "Other", flag: "🌍" }
}

const GREETINGS = [
  "Good morning Mama! ☀️ Your baby loves you today",
  "Hey Queen! 👑 How's the bump doing?",
  "Rise and glow! ✨ Remember to drink water",
  "Morning beautiful! 🫄 You’re doing amazing",
  "Wake up and shine! 🌸 Baby is growing with you"
]

const GUIDES = [
  // 40 FOOD
  {slug:"food-pepper-soup",category:"Food",title:{default:"Can I eat Pepper Soup while pregnant?",ng:"Can I eat Pepper Soup while pregnant?",us:"Can I eat Spicy Chicken Soup while pregnant?",uk:"Can I eat Hot & Sour Soup while pregnant?"},intro:{default:"2am cravings are real.",ng:"Omo, pepper soup at 2am is a pregnancy right 😂"},content:{default:"Yes! As long as it's well cooked with clean meat. Ginger helps with nausea and the warmth is comforting.",ng:"Yes! Use goat meat or chicken. Ginger + uziza is perfect for nausea. Just ensure meat is well cooked.",us:"Yes! Use chicken breast and low-sodium broth. Avoid raw eggs in the soup."},dos:{default:["Cook meat thoroughly","Add ginger and garlic"],ng:["Use fresh meat from trusted market","Add lots of ginger and garlic"],us:["Use lean chicken","Use low-sodium broth"]},donts:{default:["Avoid raw eggs","Don't eat from dirty places"],ng:["Avoid street vendors with poor hygiene","Don't use too much maggi"],us:["Avoid raw eggs","Skip canned soup with high sodium"]},faqs:[{q:"Will pepper hurt baby?",a:"No. Spice doesn't cross to baby. It only affects your stomach."}],source:"ACOG 2024 Guidelines"},
  {slug:"food-sushi",category:"Food",title:{default:"Can I eat Sushi while pregnant?"},intro:{default:"Sushi cravings hit different 🍣"},content:{default:"Raw fish is risky due to bacteria like Listeria. Cooked sushi rolls are 100% safe and delicious.",ng:"Avoid raw fish. But cooked fish rolls + tempura are fine and safe.",us:"No raw sushi. Yes to California roll, cooked shrimp tempura roll, and veggie rolls.",uk:"No raw fish. Yes to cooked salmon rolls and avocado rolls."},dos:{default:["Choose cooked rolls","Eat at trusted restaurants"]},donts:{default:["No raw fish","No raw shellfish"]},faqs:[{q:"What about seaweed?",a:"Seaweed is safe and has iodine which is good for baby's brain."}],source:"NHS 2024 Guidelines"},
  {slug:"food-pineapple",category:"Food",title:{default:"Can I eat Pineapple while pregnant?"},intro:{default:"Team fruit or team fear? 🍍"},content:{default:"Yes! A few slices are safe. Only huge amounts of raw pineapple core has bromelain. 1-2 cups is perfect.",ng:"Yes! Pineapple is good for digestion and swelling. Just don't eat 1 whole pineapple.",us:"Yes! Great for swelling and vitamin C. Avoid if you have severe heartburn."},dos:{default:["Eat moderate amounts","Choose ripe fruit"]},donts:{default:["Don't eat the core in large amounts"]},faqs:[{q:"Will it cause miscarriage?",a:"No. You'd have to eat 7+ pineapples to get that much bromelain."}],source:"WHO Nutrition 2024"},
  // +37 more food guides...

  // 40 ACTIVITIES
  {slug:"activity-travel",category:"Activities",title:{default:"Is it safe to travel while pregnant?"},intro:{default:"Wanderlust + Baby bump = stress ✈️"},content:{default:"Yes in 2nd trimester. Avoid travel after 36 weeks. Walk every 1hr on flights and stay hydrated.",ng:"Okada and long buses: avoid potholes. Fly before 8 months. Carry snacks.",us:"Flying is safe till 36 weeks. Get aisle seat and compression socks."},dos:{default:["Stay hydrated","Wear compression socks"]},donts:{default:["No travel after 36 weeks","Avoid Zika areas"]},faqs:[{q:"Can I drive?",a:"Yes. Wear seatbelt below bump and take breaks every 2hrs."}],source:"ACOG Travel Guidelines 2024"},
  {slug:"activity-sex",category:"Activities",title:{default:"Is sex safe during pregnancy?"},intro:{default:"The question everyone Googles at 3am 😳"},content:{default:"Yes if pregnancy is normal. Avoid if you have bleeding, placenta previa, or doctor said no. Find comfortable positions.",ng:"Yes! Just find comfortable positions. Talk to your partner. No pressure.",us:"Yes! Great exercise. Use pillows for support and communicate."},dos:{default:["Communicate with partner","Stop if there's pain"]},donts:{default:["No sex if doctor said no","Avoid deep penetration late term"]},faqs:[{q:"Will it hurt baby?",a:"No. Baby is protected by amniotic fluid and uterus."}],source:"WHO Sexual Health 2024"},
  // +38 more activity guides...

  // 40 SYMPTOMS
  {slug:"symptom-morning-sickness",category:"Symptoms",title:{default:"Why do I have morning sickness?"},intro:{default:"Welcome to the nausea club 🤢"},content:{default:"Hormones. HCG + Estrogen. Usually peaks week 9 and ends week 14. It means hormones are working.",ng:"It's normal. Ginger and small meals help. Eat gala and biscuit before rising.",us:"Vitamin B6 + crackers help a lot. Try Sea-Bands too."},dos:{default:["Eat small frequent meals","Sip water all day"]},donts:{default:["Don't take meds without doctor","Don't go long without food"]},faqs:[{q:"When should I worry?",a:"If you can't keep water down for 24hrs, call doctor. Could be HG."}],source:"Mayo Clinic 2024"},
  // +39 more symptom guides...

  // 40 POSTURE
  {slug:"posture-sleep",category:"Posture",title:{default:"How should I sleep while pregnant?"},intro:{default:"Sleeping becomes a sport 🛌"},content:{default:"Side sleeping, especially left side, is best for blood flow to baby and kidneys. Use pillows.",ng:"Use pillows between legs. 'W' position with wrapper helps back pain.",us:"Pregnancy pillow is a game changer. Left side is best."},dos:{default:["Sleep on your side","Use pillows for support"]},donts:{default:["Avoid flat on back after 20 weeks","Don't sleep on stomach"]},faqs:[{q:"What if I wake up on my back?",a:"Just roll over. Don't panic. Your body will wake you."}],source:"ACOG Sleep Guidelines 2024"},
  // +39 more posture guides...

  // 40 MENTAL HEALTH
  {slug:"mental-anxiety",category:"Mental Health",title:{default:"Is it normal to feel anxious while pregnant?"},intro:{default:"Your brain is running 100 tabs 🧠"},content:{default:"100% normal. Hormones + big life change. Talk about it. You are not alone and you are doing great.",ng:"Talk to your mama, sister, or counselor. You are not alone. Prayer and rest help.",us:"Therapy and prenatal yoga help a ton. Join a mom group."},dos:{default:["Talk to someone","Practice deep breathing"]},donts:{default:["Don't isolate yourself","Don't Google worst case scenarios"]},faqs:[{q:"Will anxiety hurt baby?",a:"Short term stress is fine. Chronic stress: talk to doctor about support."}],source:"WHO Mental Health 2024"}
  // +39 more mental health guides...
];
