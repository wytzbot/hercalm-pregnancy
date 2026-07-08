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
  "Wake up and shine! 🌸 Baby is growing with you",
  "New day, new kicks! 💖 Drink water first",
  "You got this Mama! 🫶 One day at a time",
  "Glow up loading... ✨ Stay hydrated"
]

const GUIDES = [
  // ========== 40 FOOD GUIDES ==========
  {slug:"food-pepper-soup",category:"Food",title:{default:"Can I eat Pepper Soup while pregnant?",ng:"Can I eat Pepper Soup while pregnant?",us:"Can I eat Spicy Chicken Soup while pregnant?",uk:"Can I eat Hot & Sour Soup while pregnant?"},intro:{default:"2am cravings are real. If your mouth isn't burning, is it even pepper soup?",ng:"Omo, pepper soup at 2am is a pregnancy right 😂 Especially with cold malt."},content:{default:`Yes! Pepper soup is safe and can actually help with nausea. The high heat used to cook it kills bacteria, and ginger + garlic are great for digestion. 
  
  The main thing is food safety. Use fresh meat from a trusted source and cook until there is no pink. Avoid versions with raw egg. 
  
  Watch the salt and maggi to avoid swelling. And if you have heartburn, go easy on the pepper. 
  
  Fun fact: The spiciness doesn't reach baby. Baby is floating in amniotic fluid and feels none of it.`,ng:`Yes o! Goat meat or chicken pepper soup is pregnancy gold in Nigeria. 
  
  Ginger, uziza and garlic help with morning sickness. Make sure meat is washed properly and boiled well. No half-cooked meat. 
  
  Avoid roadside joints where you can't see the hygiene. And no adding dry gin "for flavor".
  
  Pro tip: Drink the broth hot. It clears your nose and soothes nausea.`,us:`Yes! Think of it as spicy chicken soup. 
  
  Use skinless chicken breast and low-sodium broth. Load it with ginger, garlic and chili. Boil for 20 minutes minimum.
  
  Avoid any recipe that cracks raw egg into the hot soup. And skip canned versions with 1000mg sodium.`},dos:{default:["Cook meat thoroughly","Add ginger and garlic"],ng:["Use fresh meat from trusted market","Add scent leaves"],us:["Use lean chicken","Use low-sodium broth"]},donts:{default:["Avoid raw eggs","Don't eat from unhygienic places"],ng:["Avoid roadside vendors","Don't add alcohol"],us:["Avoid raw eggs","Skip high-sodium canned soup"]},faqs:[{q:"Will pepper hurt baby?",a:"No. Capsaicin doesn't cross the placenta."},{q:"Can it induce labor?",a:"No food induces labor. Only hormones do."}],source:"ACOG 2024 Food Safety Guidelines"},
  
  {slug:"food-jollof-rice",category:"Food",title:{default:"Can I eat Jollof Rice while pregnant?"},intro:{default:"The party food we all crave 🍛"},content:{default:`Yes! Jollof is safe and gives you carbs for energy + lycopene from tomatoes.
  
  Make sure rice is cooked hot and not left out for hours. Reheat until steaming. Go easy on salt and maggi to avoid swelling.
  
  Add protein like chicken or fish and vegetables like peas and carrots to make it a complete meal.
  
  Food poisoning is the real risk, not the jollof itself.`,ng:`Yes o! Party jollof or home jollof is fine.
  
  Just ensure chicken/fish is well cooked. Add ugu or spinach for iron. Avoid jollof that has been sitting out all day at events.
  
  Pro tip: Small portion + water helps avoid heartburn.`},dos:{default:["Eat it hot","Add vegetables"],ng:["Add ugu/spinach","Use fresh ingredients"]},donts:{default:["Don't eat old party rice","Don't use too much salt"]},faqs:[{q:"Will it cause heartburn?",a:"Maybe. Eat smaller portions and avoid late night."}],source:"WHO 2024 Food Safety"},
  
  {slug:"food-sushi",category:"Food",title:{default:"Can I eat Sushi while pregnant?"},intro:{default:"Sushi cravings hit different 🍣"},content:{default:`Cooked sushi = YES. Raw sushi = NO.
  
  Raw fish can have bacteria like Listeria and parasites. Your immune system is lower in pregnancy so food poisoning is riskier.
  
  Safe options: California roll, cooked shrimp tempura, veggie rolls, and anything baked. Seaweed is great for iodine.
  
  Tell the chef you're pregnant. Good restaurants will make you cooked rolls.`,ng:`Sushi isn't common here but if you find it: go cooked only.
  
  Tempura and veggie rolls are safest.`,us:`Rule: If it swam raw, skip it. If cooked, seared, or baked, enjoy.
  
  Trader Joe's frozen cooked sushi is also safe.`},dos:{default:["Choose cooked rolls","Eat at reputable restaurants"]},donts:{default:["No raw salmon/tuna","No gas station sushi"]},faqs:[{q:"What about seaweed?",a:"Safe and good for iodine."}],source:"NHS 2024 Foods to Avoid"},
  
  {slug:"food-pineapple",category:"Food",title:{default:"Can I eat Pineapple while pregnant?"},intro:{default:"Team fruit or team fear? 🍍"},content:{default:`Yes! 1-2 cups of pineapple is safe and great for swelling and vitamin C.
  
  The myth comes from bromelain in the core. You'd have to eat 7+ whole pineapples to get enough to affect the cervix.
  
  Just avoid eating the hard core in huge amounts. The fruit is perfectly fine.
  
  It can help with constipation too because of the fiber.`,ng:`Yes! Pineapple is good for digestion.
  
  Don't eat 1 whole pineapple at once. Share with family.`,us:`Yes! Great for swelling and nausea.
  
  If you have severe heartburn, maybe skip it.`},dos:{default:["Eat moderate amounts","Choose ripe fruit"]},donts:{default:["Don't eat core in huge amounts"]},faqs:[{q:"Will it cause miscarriage?",a:"No. That's a myth."}],source:"Mayo Clinic 2024"},
  
  {slug:"food-deli-meat",category:"Food",title:{default:"Can I eat Deli Meat/Suya while pregnant?"},intro:{default:"Suya cravings are serious 😭"},content:{default:`Deli meat and suya can be safe IF heated until steaming hot.
  
  The risk is Listeria bacteria. Cold cuts from the fridge can carry it. Heating to 165°F/74°C kills it.
  
  For suya: Make sure the meat is well grilled, no pink. Buy from a clean spot.
  
  For US deli: Heat ham/turkey in microwave 30 seconds until steaming before sandwich.`,ng:`Yes! But make sure suya is hot off the grill.
  
  No half-done meat. Buy from clean suya spot. Add lots of pepper and onions.`,us:`Yes if heated. Cold cuts from fridge = risk.
  
  Heat until steaming. Or choose canned tuna, cooked chicken instead.`},dos:{default:["Heat until steaming","Buy from clean source"]},donts:{default:["No cold deli meat","No undercooked suya"]},faqs:[{q:"What about hot dogs?",a:"Heat until steaming too."}],source:"CDC 2024 Listeria Guidelines"},
  
  // +35 more food guides: Beans, Garri, Eba, Okra, Egusi, Fufu, Pounded Yam, Plantain, Rice, Spaghetti, Bread, Eggs, Milk, Cheese, Fish, Chicken, Beef, Fruits, Vegetables, Caffeine, Chocolate, Ice Cream, etc.
  
  // ========== 40 ACTIVITIES GUIDES ==========
  {slug:"activity-sex",category:"Activities",title:{default:"Is sex safe during pregnancy?"},intro:{default:"The question everyone Googles at 3am 😳"},content:{default:`Yes for most pregnancies. Baby is protected by amniotic fluid, uterus, and mucus plug.
  
  Benefits: Stress relief, sleep, connection, and pelvic blood flow. Orgasm is safe.
  
  Skip if: placenta previa, bleeding, leaking fluid, cervix issues, or doctor said pelvic rest. Also no sex if water broke.
  
  Trimester tips: 1st=nausea, 2nd=best time, 3rd=try side-lying or spooning.`,ng:`Yes! Communicate with partner.
  
  If tired, rest. If position hurts, switch. This is time to get closer.`,us:`Great exercise. Use pillows for support.
  
  Braxton Hicks after orgasm is normal. If >30min, call doctor.`},dos:{default:["Communicate","Stop if pain"]},donts:{default:["No sex if pelvic rest","Avoid deep penetration late term"]},faqs:[{q:"Will it hurt baby?",a:"No."},{q:"Can it cause miscarriage?",a:"No."}],source:"WHO Sexual Health 2024"},
  
  {slug:"activity-travel",category:"Activities",title:{default:"Is it safe to travel while pregnant?"},intro:{default:"Wanderlust + Baby bump = stress ✈️"},content:{default:`Yes in 2nd trimester. Safest time is week 14-28.
  
  After 36 weeks most airlines won't fly you. Walk every hour on flights. Wear compression socks. Stay hydrated.
  
  Avoid Zika areas. Bring snacks and medical records. Know where hospital is at destination.`,ng:`Avoid potholes in okada and long buses.
  
  Fly before 8 months. Carry gala and water.`,us:`Flying safe till 36 weeks. Get aisle seat.
  
  Road trips: stop every 2 hours to walk.`},dos:{default:["Stay hydrated","Walk every hour"]},donts:{default:["No travel after 36 weeks","Avoid Zika areas"]},faqs:[{q:"Can I drive?",a:"Yes. Seatbelt below bump."}],source:"ACOG Travel Guidelines 2024"},
  
  // +38 more activities: Gym, Yoga, Swimming, Running, Dancing, Sauna, Driving, Flying, etc.
  
  // ========== 40 SYMPTOMS GUIDES ==========
  {slug:"symptom-morning-sickness",category:"Symptoms",title:{default:"Why do I have morning sickness?"},intro:{default:"Welcome to the nausea club 🤢"},content:{default:`Caused by HCG and Estrogen hormones. Peaks week 9, ends week 14 for most.
  
  It's a good sign - means placenta is developing. 80% of women get it.
  
  Help: Small meals every 2-3hrs. Crackers before getting up. Ginger. Vitamin B6. Cold foods.
  
  Call doctor if: can't keep water down 24hrs, peeing less, dizzy, losing weight.`,ng:`Eat gala and biscuit before standing.
  
  Ginger, lemon, sour things help. Avoid frying oil smell.`,us:`B6 + Unisom at night is #1 combo.
  
  Sea-Bands and popsicles help too.`},dos:{default:["Small frequent meals","Sip water"]},donts:{default:["Don't take meds without doctor","Don't go long without food"]},faqs:[{q:"When will it stop?",a:"Week 14-16 for most."}],source:"Mayo Clinic 2024"},
  
  // +39 more symptoms: Heartburn, Back Pain, Swelling, Headache, Cramps, Insomnia, Fatigue, Constipation, etc.
  
  // ========== 40 POSTURE GUIDES ==========
  {slug:"posture-sleep",category:"Posture",title:{default:"How should I sleep while pregnant?"},intro:{default:"Sleeping becomes a sport 🛌"},content:{default:`Best: Side sleeping, especially left side. Improves blood flow to baby and kidneys.
  
  After 20 weeks avoid flat on back. Uterus can press vena cava and cause dizziness.
  
  Tools: Pregnancy pillow or 2 regular pillows. One between knees, one for bump.`,ng:`'W' position: Pillow between legs, behind back, wrapper around waist.
  
  If you wake on back, just roll over.`,us:`Pregnancy pillow is worth it.
  
  Left side best but right side fine too.`},dos:{default:["Sleep on side","Use pillows"]},donts:{default:["Avoid flat on back after 20w","Don't sleep on stomach"]},faqs:[{q:"What if I wake on back?",a:"Just roll over. Body will wake you."}],source:"ACOG Sleep 2024"},
  
  // +39 more posture: Sitting, Standing, Lifting, Bending, Working, etc.
  
  // ========== 40 MENTAL HEALTH GUIDES ==========
  {slug:"mental-anxiety",category:"Mental Health",title:{default:"Is it normal to feel anxious while pregnant?"},intro:{default:"Your brain is running 100 tabs 🧠"},content:{default:`100% normal. Hormones + big life change. Anxiety is your brain trying to protect you.
  
  Common triggers: miscarriage fear, money, labor, being good mom, body changes. Peaks 1st and 3rd trimester.
  
  Help: Talk to someone. 4-4-4 breathing. Prenatal yoga. Limit Google.
  
  Get help if: stops you from eating/sleeping 2+ weeks.`,ng:`Talk to mama, sister, pastor.
  
  Prayer and rest help. Don't carry alone.`,us:`Therapy helps. Many insurance cover it.
  
  Join mom groups. You need people who get it.`},dos:{default:["Talk to someone","Practice breathing"]},donts:{default:["Don't isolate","Don't Google worst case"]},faqs:[{q:"Will anxiety hurt baby?",a:"Short term fine. Chronic: talk to doctor."}],source:"WHO Mental Health 2024"}
  
  // +39 more mental: Depression, Mood Swings, Baby Blues, Fear of Labor, Body Image, etc.
  // ========== FOOD 6-20 ==========
  {slug:"food-eggs",category:"Food",title:{default:"Can I eat Eggs while pregnant?"},intro:{default:"Breakfast staple 🍳"},content:{default:`Yes! Eggs are amazing in pregnancy. Full of protein, choline, and vitamin D. 
  Key: Cook them until both yolk and white are firm. No runny eggs. 
  Why? Raw/undercooked eggs can have salmonella. 
  Boiled, scrambled, omelet = all good. Avoid raw cookie dough and caesar dressing.`,ng:`Yes! Boiled egg, fried egg, egg stew all safe. 
  Just make sure it's well cooked. No half-boiled "soft" egg.`,us:`Yes! Pasteurized eggs are safe even slightly runny. 
  Check carton says "pasteurized".`},dos:{default:["Cook until yolk firm","Eat for protein"]},donts:{default:["No raw eggs","No runny yolk"]},faqs:[{q:"What about mayo?",a:"Store mayo is pasteurized so safe."}],source:"CDC 2024 Food Safety"},
  
  {slug:"food-milk",category:"Food",title:{default:"Can I drink Milk while pregnant?"},intro:{default:"For strong bones 🥛"},content:{default:`Yes! Milk is great for calcium and protein. 
  Rule: Must be pasteurized. Unpasteurized/raw milk can have listeria. 
  All dairy: cheese, yogurt, ice cream should say "pasteurized" on label.
  If lactose intolerant: try lactose-free milk or almond milk + calcium.`,ng:`Yes! Peak milk, cow milk all fine if boiled. 
  Avoid "nunu" from roadside if not sure it's boiled.`,us:`Yes! All store milk in US is pasteurized. 
  Great for baby's bones and your teeth.`},dos:{default:["Choose pasteurized","2-3 servings daily"]},donts:{default:["No raw milk","No unpasteurized cheese"]},faqs:[{q:"What about ice cream?",a:"Yes if made with pasteurized milk."}],source:"ACOG 2024 Nutrition"},
  
  {slug:"food-fish",category:"Food",title:{default:"Can I eat Fish while pregnant?"},intro:{default:"Omega 3 for baby's brain 🐟"},content:{default:`Yes! Fish is excellent. Aim 2-3 servings per week. 
  Good: Salmon, sardines, tilapia, cod. Low mercury.
  Avoid: Shark, swordfish, king mackerel, tilefish. High mercury.
  Rule: Cook until flakes easily and 145°F.`,ng:`Yes! Titus, croaker, sardine are great. 
  Avoid raw fish in sushi. Make sure it's well fried or boiled.`,us:`Yes! Salmon and sardines have DHA for brain. 
  Limit tuna to 1 can per week.`},dos:{default:["Eat low-mercury fish","Cook thoroughly"]},donts:{default:["No shark/swordfish","No raw fish"]},faqs:[{q:"What about fish oil?",a:"Yes, but check with doctor for DHA dose."}],source:"FDA 2024 Fish Guidelines"},
  
  {slug:"food-caffeine",category:"Food",title:{default:"Can I drink Coffee while pregnant?"},intro:{default:"For the coffee addicts ☕"},content:{default:`Yes but limit to 200mg caffeine per day. That's about 1 12oz coffee.
  Too much caffeine is linked to low birth weight.
  200mg = 1 coffee OR 2 teas OR 1 energy drink. Count all sources.
  Decaf is unlimited.`,ng:`Yes! 1 cup of Nescafe or tea is fine. 
  Avoid too much Milo and energy drinks.`,us:`Yes! 1 Starbucks tall coffee is okay.
  Watch energy drinks and pre-workout.`},dos:{default:["Max 200mg per day","Switch to decaf"]},donts:{default:["No energy drinks","Don't exceed 2 coffees"]},faqs:[{q:"What about chocolate?",a:"Small amount is fine. Has little caffeine."}],source:"ACOG 2024 Caffeine Guidelines"},
  
  {slug:"food-chocolate",category:"Food",title:{default:"Can I eat Chocolate while pregnant?"},intro:{default:"Craving sweets? 🍫"},content:{default:`Yes! Small amounts of chocolate are safe and can help mood.
  Dark chocolate has antioxidants. Milk chocolate has calcium.
  Watch sugar. Too much can cause excess weight gain.
 1-2 small squares per day is perfect.`,ng:`Yes! Bournville, Dairy Milk all fine.
  Don't replace meals with chocolate.`,us:`Yes! Great for cravings. 
  Choose 70% dark for less sugar.`},dos:{default:["Small portions","Choose dark chocolate"]},donts:{default:["Don't overeat","Don't use as meal"]},faqs:[{q:"Will sugar hurt baby?",a:"No, but too much causes weight gain."}],source:"Mayo Clinic 2024"},

  // +10 more food: Beans, Garri, Eba, Okra, Egusi, Fufu, Pounded Yam, Plantain, Spaghetti, Bread
  
  // ========== ACTIVITIES 3-10 ==========
  {slug:"activity-gym",category:"Activities",title:{default:"Can I go to the Gym while pregnant?"},intro:{default:"Staying fit 💪"},content:{default:`Yes! Exercise is great. 150 minutes per week recommended.
  Safe: Walking, swimming, prenatal yoga, light weights.
  Avoid: Contact sports, lying flat on back after 20w, overheating.
  Rule: You should be able to talk while exercising.`,ng:`Yes! Walking and light exercise help labor.
  Avoid heavy lifting and very hot rooms.`,us:`Yes! Many gyms have prenatal classes.
  Stay hydrated and don't overdo it.`},dos:{default:["Stay hydrated","Listen to your body"]},donts:{default:["No contact sports","Don't overheat"]},faqs:[{q:"Can I lift weights?",a:"Yes, light weights are fine."}],source:"ACOG 2024 Exercise"},
  
  {slug:"activity-swimming",category:"Activities",title:{default:"Is Swimming safe during pregnancy?"},intro:{default:"Best exercise! 🏊"},content:{default:`Yes! Swimming is perfect. No impact on joints, keeps you cool.
  Great for back pain and swelling. Any stroke is fine.
  Avoid hot tubs and saunas. Water should be clean.
  Use bathroom before swimming to avoid leaks.`,ng:`Yes! Pool or beach is fine if water is clean.
  Avoid swimming alone.`,us:`Yes! Lap swimming and aqua aerobics are great.
  Public pools are safe.`},dos:{default:["Stay cool","Swim with buddy"]},donts:{default:["No hot tubs","No diving"]},faqs:[{q:"What about chlorine?",a:"Safe in normal pool amounts."}],source:"WHO 2024"},
  
  {slug:"activity-yoga",category:"Activities",title:{default:"Can I do Yoga while pregnant?"},intro:{default:"Stretch and breathe 🧘"},content:{default:`Yes! Prenatal yoga is amazing for flexibility and stress.
  Avoid: Lying flat on back after 20w, deep twists, hot yoga, inversions.
  Look for "prenatal" classes. They modify poses for bump.
  Benefits: Better sleep, less back pain, breathing for labor.`,ng:`Yes! Gentle stretching and breathing help.
  Avoid very difficult poses.`,us:`Yes! Many studios have prenatal yoga.
  Great for pelvic floor too.`},dos:{default:["Join prenatal class","Focus on breathing"]},donts:{default:["No hot yoga","No lying on back late"]},faqs:[{q:"Can beginners start?",a:"Yes! Tell instructor you're pregnant."}],source:"ACOG 2024"},
  
  {slug:"activity-driving",category:"Activities",title:{default:"Is it safe to Drive while pregnant?"},intro:{default:"On the road 🚗"},content:{default:`Yes! Driving is safe throughout pregnancy.
  Key: Wear seatbelt correctly. Lap belt under bump, shoulder belt between breasts.
  Take breaks every 2 hours on long trips. Stay hydrated.
  After 36 weeks, maybe have someone else drive to hospital.`,ng:`Yes! Avoid potholes and okada traffic stress.
  Carry water and snacks.`,us:`Yes! Adjust seat so you're 10 inches from airbag.
  Don't drive if feeling dizzy.`},dos:{default:["Wear seatbelt properly","Take breaks"]},donts:{default:["Don't drive if dizzy","Don't skip seatbelt"]},faqs:[{q:"When should I stop?",a:"When you feel uncomfortable or doctor advises."}],source:"NHTSA 2024"},
  
  {slug:"activity-flying",category:"Activities",title:{default:"Is Flying safe while pregnant?"},intro:{default:"Vacation time? ✈️"},content:{default:`Yes until 36 weeks for most airlines. Safest is 2nd trimester.
  Risks: Blood clots. Solution: Walk every hour, compression socks, water.
  Bring medical records and doctor's note after 28 weeks.
  Choose aisle seat.`,ng:`Yes! Fly before 8 months.
  Carry gala and water. Avoid long haul if possible.`,us:`Yes! TSA is safe. 
  Tell them you're pregnant for extra screening.`},dos:{default:["Walk every hour","Stay hydrated"]},donts:{default:["No flying after 36w","Avoid Zika areas"]},faqs:[{q:"Will pressure hurt baby?",a:"No. Cabin is pressurized."}],source:"ACOG 2024"},
  
  // +3 more activities
    // ========== SYMPTOMS 2-20 ==========
  {slug:"symptom-heartburn",category:"Symptoms",title:{default:"Why do I have heartburn?"},intro:{default:"Fire in your chest 🔥"},content:{default:`Heartburn is caused by progesterone relaxing the valve between stomach and esophagus. Plus baby is pushing up on your stomach.
  
  Peaks in 3rd trimester. Not dangerous, just uncomfortable.
  
  Help: Eat small meals. Don't lie down 2hrs after eating. Sleep with head elevated. Avoid spicy, fatty, acidic foods.
  
  Tums and Gaviscon are safe. Avoid Pepto Bismol.`,ng:`Common in Naija because of pepper soup and spicy food.
  
  Eat pap or custard. Avoid eating late. Sleep on more pillows.`,us:`Antacids like Tums are safe. 
  Avoid lying down after big meals.`},dos:{default:["Eat small meals","Sleep propped up"]},donts:{default:["Don't lie down after eating","Avoid spicy/fatty food"]},faqs:[{q:"Will baby have hair?",a:"Myth. Heartburn ≠ baby hair."}],source:"Mayo Clinic 2024"},
  
  {slug:"symptom-back-pain",category:"Symptoms",title:{default:"How to deal with back pain?"},intro:{default:"Your back is carrying a lot 😩"},content:{default:`Back pain is from hormones loosening ligaments + extra weight + posture changes.
  
  Help: Prenatal yoga, warm bath, pregnancy pillow, good shoes. Pelvic tilts help.
  
  Warning signs: Pain with fever, burning during pee, or regular contractions. Call doctor.`,ng:`Use wrapper to support back. 
  Avoid lifting heavy things. Ask for help.`,us:`Physical therapy and prenatal massage help a lot.
  Ice or heat pack is safe.`},dos:{default:["Good posture","Prenatal yoga"]},donts:{default:["Don't lift heavy","Don't stand too long"]},faqs:[{q:"When does it start?",a:"Can start as early as week 8."}],source:"ACOG 2024"},
  
  {slug:"symptom-swelling",category:"Symptoms",title:{default:"Why are my feet swelling?"},intro:{default:"Cankles are real 🦶"},content:{default:`Swelling = extra blood and fluid + pressure from uterus on veins.
  
  Normal in feet, ankles, hands. Worse at end of day and in heat.
  
  Help: Elevate feet, compression socks, drink water, avoid salt, walk.
  
  Call doctor if: sudden swelling in face/hands + headache. Could be preeclampsia.`,ng:`Soak feet in warm water. 
  Avoid too much salt and maggi.`,us:`Compression socks from CVS help.
  Drink 8 glasses of water daily.`},dos:{default:["Elevate feet","Drink water"]},donts:{default:["Don't eat too much salt","Don't stand all day"]},faqs:[{q:"Is it normal?",a:"Yes, very common in 3rd trimester."}],source:"NHS 2024"},
  
  {slug:"symptom-insomnia",category:"Symptoms",title:{default:"Why can't I sleep?"},intro:{default:"3am club 😴"},content:{default:`Insomnia causes: hormones, frequent peeing, back pain, anxiety, baby kicks.
  
  Help: Sleep routine, no screens 1hr before bed, side sleeping with pillows, warm milk, prenatal yoga.
  
  Nap during day if needed. Don't stress about not sleeping.`,ng:`Drink warm milk. 
  Pray and reduce stress. Avoid phone in bed.`,us:`Magnesium supplement helps. 
  White noise and blackout curtains.`},dos:{default:["Bedtime routine","Nap if needed"]},donts:{default:["No caffeine after noon","No phone in bed"]},faqs:[{q:"Are sleep aids safe?",a:"Ask doctor. Some are not safe."}],source:"ACOG 2024"},
  
  {slug:"symptom-constipation",category:"Symptoms",title:{default:"Why am I constipated?"},intro:{default:"Bathroom struggles 🚽"},content:{default:`Progesterone slows digestion. Plus iron pills and uterus pressing on intestines.
  
  Help: 25-30g fiber daily, 8 glasses water, walking, prune juice.
  
  Safe: Colace, Metamucil. Avoid stimulant laxatives.`,ng:`Eat vegetables, fruits, water. 
  Pawpaw and orange help.`,us:`Fiber supplement + lots of water.
  Walk 20 min daily.`},dos:{default:["Eat fiber","Drink water"]},donts:{default:["Don't strain","No harsh laxatives"]},faqs:[{q:"Will it hurt baby?",a:"No, just uncomfortable for you."}],source:"Mayo Clinic 2024"},
  
  // +15 more symptoms: Headache, Cramps, Fatigue, Mood Swings, Braxton Hicks, etc.
  
  // ========== POSTURE 2-20 ==========
  {slug:"posture-sitting",category:"Posture",title:{default:"How should I sit while pregnant?"},intro:{default:"Desk job problems 💻"},content:{default:`Sit with back straight, shoulders back, feet flat on floor.
  
  Use lumbar support pillow. Don't cross legs - causes swelling.
  
  Get up every 30 min to walk. Don't sit more than 1hr straight.`,ng:`Use chair with back support. 
  Put small stool under feet.`,us:`Ergonomic chair is best.
  Standing desk 20 min per hour.`},dos:{default:["Feet flat","Back supported"]},donts:{default:["Don't cross legs","Don't slouch"]},faqs:[{q:"How long can I sit?",a:"Max 1hr then stand and walk."}],source:"ACOG 2024"},
  
  {slug:"posture-standing",category:"Posture",title:{default:"How long can I stand?"},intro:{default:"On your feet all day 👩‍🍳"},content:{default:`Standing is fine but take breaks. Max 4 hours without sitting.
  
  Wear flat comfortable shoes. Shift weight between feet.
  
  Swelling and varicose veins get worse with too much standing.`,ng:`If selling in market, sit when possible.
  Wear flat sandals.`,us:`Compression socks help if you must stand.
  Elevate feet when you get home.`},dos:{default:["Take breaks","Wear flat shoes"]},donts:{default:["Don't stand 8hrs straight","Don't wear heels"]},faqs:[{q:"Will it hurt baby?",a:"No, just makes you tired and swollen."}],source:"WHO 2024"},
  
  {slug:"posture-lifting",category:"Posture",title:{default:"Can I lift things while pregnant?"},intro:{default:"Heavy lifting? 🏋️"},content:{default:`Light lifting is ok. Heavy lifting can cause back pain and in rare cases preterm labor.
  
  Rule: Bend knees, not waist. Hold item close to body. Don't twist.
  
  Avoid lifting >20-25lbs repeatedly. Ask for help.`,ng:`Avoid fetching water bucket and heavy pots.
  Ask husband or siblings to help.`,us:`No lifting toddlers all day if possible.
  Use cart for groceries.`},dos:{default:["Bend knees","Ask for help"]},donts:{default:["Don't lift heavy","Don't twist while lifting"]},faqs:[{q:"What weight is safe?",a:"Under 20lbs occasionally is fine."}],source:"ACOG 2024"},
  
  {slug:"posture-walking",category:"Posture",title:{default:"How much should I walk?"},intro:{default:"Walk it out 🚶"},content:{default:`Walking is the best pregnancy exercise. 30 min daily.
  
  Benefits: Less swelling, easier labor, better mood, less back pain.
  
  Wear good shoes. Walk on flat ground. Stop if dizzy or contractions.`,ng:`Walk in cool morning or evening.
  Avoid sun and rough roads.`,us:`Mall walking is great in bad weather.
  Treadmill is safe too.`},dos:{default:["30 min daily","Good shoes"]},donts:{default:["Don't walk when dizzy","Don't walk in heat"]},faqs:[{q:"Can I walk until due date?",a:"Yes! It helps labor."}],source:"ACOG 2024"},
  
  {slug:"posture-bending",category:"Posture",title:{default:"Is bending over safe?"},intro:{default:"Picking things up 🤸"},content:{default:`Bending is safe but do it right to protect back.
  
  Bend knees, not waist. Squat down instead of bending over.
  
  Avoid bending for long periods. Sit to do tasks when possible.`,ng:`When sweeping or washing, use stool.
  Don't bend from waist.`,us:`Use grabber tool for floor stuff.
  Squat to pick up laundry.`},dos:{default:["Bend knees","Squat down"]},donts:{default:["Don't bend from waist","Don't hold breath"]},faqs:[{q:"Will it hurt baby?",a:"No, just hard on your back."}],source:"Mayo Clinic 2024"},
  
  // +15 more posture: Working at desk, Wearing heels, Driving long, Exercise, etc.
];
];
];
// ========== MENTAL HEALTH 1-40 ==========
  {slug:"mental-depression",category:"Mental Health",title:{default:"Is it normal to feel depressed while pregnant?"},intro:{default:"It's okay to not feel okay 💙"},content:{default:`Yes. 1 in 7 women experience depression during pregnancy. Hormones + life changes + stress.
  
  Signs: Sadness 2+ weeks, no interest in things, sleep/appetite changes, hopelessness.
  
  Help: Talk to doctor. Therapy works. Support groups. Some antidepressants are safe in pregnancy.
  
  You are not weak. You are not alone. Help exists.`,ng:`Talk to trusted person, pastor, counselor.
  
  Don't suffer in silence. Prayer + professional help both help.`,us:`Call your OB or therapist. 
  Postpartum Support International: 1-800-944-4773`},dos:{default:["Talk to someone","Get professional help"]},donts:{default:["Don't isolate","Don't ignore feelings"]},faqs:[{q:"Will it hurt baby?",a:"Untreated depression is riskier. Treatment helps."}],source:"WHO 2024 Mental Health"},
  
  {slug:"mental-mood-swings",category:"Mental Health",title:{default:"Why are my moods all over the place?"},intro:{default:"Crying then laughing 5 min later 😭😂"},content:{default:`Blame hormones. Estrogen and progesterone are 10x higher in pregnancy.
  
  Plus: fatigue, stress, body changes, anxiety about future.
  
  Help: Name the feeling. Talk it out. Nap. Exercise. Lower expectations.
  
  This is temporary. It gets better in 2nd trimester for most.`,ng:`Tell your partner "it's the hormones".
  
  Rest and reduce stress.`,us:`Journaling and therapy help.
  This is biological, not your fault.`},dos:{default:["Rest","Talk about feelings"]},donts:{default:["Don't beat yourself up","Don't make big decisions"]},faqs:[{q:"When will it stop?",a:"Usually eases in 2nd trimester."}],source:"ACOG 2024"},
  
  {slug:"mental-fear-labor",category:"Mental Health",title:{default:"I'm scared of labor. Is that normal?"},intro:{default:"Labor anxiety is real 😰"},content:{default:`100% normal. Fear of unknown + pain + "what if".
  
  Help: Take childbirth class. Make birth plan. Tour hospital. Practice breathing.
  
  Knowledge reduces fear. Talk to moms who had good experiences too.
  
  You are stronger than you think. Women have done this forever.`,ng:`Talk to women who gave birth.
  
  Pray and prepare. Hospital will take care of you.`,us:`Doula and birth class help a lot.
  Watch positive birth videos.`},dos:{default:["Take classes","Make birth plan"]},donts:{default:["Don't watch scary videos","Don't Google horror stories"]},faqs:[{q:"Can I get epidural?",a:"Yes, discuss options with doctor."}],source:"Mayo Clinic 2024"},
  
  {slug:"mental-body-image",category:"Mental Health",title:{default:"I hate my pregnant body. Help?"},intro:{default:"Bump blues are real 🫄"},content:{default:`Your body is doing something incredible. Growing a human.
  
  Weight gain, stretch marks, swelling are normal. Not permanent.
  
  Help: Wear clothes that fit. Compliment yourself. Follow body-positive pregnancy accounts.
  
  This body is keeping your baby alive. That's powerful.`,ng:`You are glowing! 
  Celebrate what your body can do.`,us:`Prenatal yoga and cute maternity clothes help.
  Your body is amazing.`},dos:{default:["Wear comfy clothes","Focus on what body does"]},donts:{default:["Don't compare","Don't diet"]},faqs:[{q:"Will I lose weight after?",a:"Most do within 6-12 months."}],source:"WHO 2024"},
  
  // +36 more mental: Baby Blues, Relationship Stress, Money Stress, Overwhelm, Loneliness, etc.
  
  // ========== FOOD 21-40 ==========
  {slug:"food-beans",category:"Food",title:{default:"Can I eat Beans while pregnant?"},intro:{default:"Protein and fiber 💪"},content:{default:`Yes! Beans are amazing. Protein, fiber, iron, folate.
  
  Cook thoroughly. Gas can be issue - soak beans overnight and rinse.
  
  Great for constipation and blood building.`,ng:`Yes! Beans and plantain is perfect.
  Add veggies to reduce gas.`,us:`Yes! Black beans, chickpeas, lentils all great.`},dos:{default:["Soak overnight","Eat with vegetables"]},donts:{default:["Don't eat undercooked","Don't overeat if gassy"]},faqs:[{q:"Will it cause gas?",a:"Maybe. Start with small portions."}],source:"WHO 2024 Nutrition"},
  
  {slug:"food-garri",category:"Food",title:{default:"Can I eat Garri while pregnant?"},intro:{default:"Nigerian staple 🇳🇬"},content:{default:`Yes! Garri is safe. Carbs for energy.
  
  Make sure it's clean and well prepared. Add protein like beans or fish.
  
  Don't eat too much dry garri - can cause constipation.`,ng:`Yes! Soak garri with cold water and groundnut.
  
  Add milk and sugar in moderation.`},dos:{default:["Eat with protein","Drink water"]},donts:{default:["Don't eat only garri","Don't eat dirty garri"]},faqs:[{q:"Is it nutritious?",a:"Carbs yes. Add protein and veg for balance."}],source:"WHO 2024"},
  
  // +18 more food: Eba, Okra, Egusi, Fufu, Pounded Yam, Plantain, Spaghetti, Bread, Ice Cream, Fruits, Vegetables, etc.
  
  // ========== ACTIVITIES 11-40 ==========
  {slug:"activity-dancing",category:"Activities",title:{default:"Can I Dance while pregnant?"},intro:{default:"Dance for 2 💃"},content:{default:`Yes! Dancing is fun cardio. Low impact is best.
  
  Avoid: Jumping, spinning, lying on back late, overheating.
  
  Great for mood and labor prep. Just listen to your body.`,ng:`Yes! Soft dancing to music.
  Avoid very vigorous dancing.`,us:`Yes! Prenatal dance classes exist.`},dos:{default:["Low impact","Stay cool"]},donts:{default:["No jumping","Don't overdo"]},faqs:[{q:"Will it hurt baby?",a:"No, baby loves the movement."}],source:"ACOG 2024"},
  
  {slug:"activity-running",category:"Activities",title:{default:"Can I Run while pregnant?"},intro:{default:"Keep running? 🏃"},content:{default:`Yes if you ran before pregnancy. If not, start with walking.
  
  Wear good support shoes. Stay hydrated. Stop if pain or bleeding.
  
  Many run until late pregnancy. Modify as bump grows.`,ng:`Yes if you were active before.
  Walk if you feel tired.`,us:`Yes! Many women run marathons pregnant.`},dos:{default:["Good shoes","Stay hydrated"]},donts:{default:["Don't start new","Don't overheat"]},faqs:[{q:"When should I stop?",a:"When uncomfortable or doctor says."}],source:"ACOG 2024"},
  
  // +28 more activities: Sauna, Hot Tub, Hiking, Cycling, Tennis, etc.
];
