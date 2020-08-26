# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = { email: 'test@testing.com', password: 'hunter12', first_name: 'Mister', last_name: 'Clean' }
User.create(demo)



Product.destroy_all

#Skin - Cleanse

amazing_face_cleanser = Product.create!(
    name: "Amazing Face Cleanser",
    category: "Skin",
    sub_category: "Cleanse",
    description: "A non-drying daily cleanser enhanced with purifying Mandarin Rind to effectively cleanse the skin without disturbing its natural balance.",
    size: "6.8 fl oz",
    price: 49.00,
    suited_to: "Oily, combination and open-pored skin, for those in warm and humid climates",
    skin_feel: "Refreshed, balanced and scrupulously clean",
    key_ingredients: "Mandarin Rind, Ylang Ylang, Lavender Oil",
    how_to_use: "Morning and evening, pour into clean hands and lather. Massage over face and neck, then rinse thoroughly with warm water.",
    dosage: "Half a teaspoon",
    texture: "Clear, low foaming gel",
    aroma: "Citrus, floral, fresh"
)


skin1 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/amazing.png')
amazing_face_cleanser.photos.attach(io: skin1, filename: 'amazing.png')





parsley_seed_facial_cleansing_oil = Product.create!(
    name: "Parsley Seed Facial Cleansing Oil",
    category: "Skin",
    sub_category: "Cleanse",
    description: "A fatty-acid rich, make-up removing formulation, with skin-calming properties. Cleanses thoroughly while gently nourishing skin.",
    size: "6.8 fl oz",
    price: 60.00,
    suited_to: "Normal, combination, dry and sensitive skin",
    skin_feel: "Calm, softened and gently cleansed",
    key_ingredients: "Macadamia Seed, Tocopherol, Beta-Carotene",
    how_to_use: "Morning and evening, blend mixture in the palm of your hand to form a milky emulsion. Massage over damp face and neck, then rinse thoroughly.",
    dosage: "One teaspoon blended with three to five drops of water",
    texture: "Water-soluble oil",
    aroma: "Floral, herbaceous, nutty"
)

skin2 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/parsley.png')
parsley_seed_facial_cleansing_oil.photos.attach(io: skin2, filename: 'parsley.png')





purifying_facial_cream_cleanser = Product.create!(
    name: "Purifying Facial Cream Cleanser",
    category: "Skin",
    sub_category: "Cleanse",
    description: "A mild preparation enhanced with White Clay and fatty-acid rich botanicals to gently cleanse and effortlessly remove surface impurities.",
    size: "3.4 fl oz",
    price: 39.00,
    suited_to: "Normal to dry skin",
    skin_feel: "Supple, softened and gently cleansed",
    key_ingredients: "Lavender Stem, White Clay, Chamomile Bud",
    how_to_use: "Morning and evening dispense into clean hands and massage over face and neck. Rinse away with warm water or remove using a damp cloth.",
    dosage: "Half a teaspoon",
    texture: "Non-foaming, water soluble cream",
    aroma: "Mild, hint of rose"
)


skin3 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/purifying.png')
purifying_facial_cream_cleanser.photos.attach(io: skin3, filename: 'purifying.png')



# # Skin - Exfoliate

tea_tree_leaf_facial_exfoliant = Product.create!(
    name: "Tea Tree Leaf Facial Exfoliant",
    category: "Skin",
    sub_category: "Exfoliant",
    description: "A dry blend of ground Tea Tree leaves, crushed nut shell and purified clay that buffs and calms skin.",
    size: "1.1 fl oz",
    price: 40.00,
    suited_to: "Normal, combination and oily skin",
    skin_feel: "Polished, refreshed and thoroughly cleansed",
    key_ingredients: "Aloe Vera, Walnut Shell, Tea Tree Leaf",
    how_to_use: "Twice weekly, blend mixture with an Aesop gel- or cream-based facial cleanser and massage gently over damp face and neck, including the lips.",
    dosage: "Half a teaspoon or as desired",
    texture: "Coarse, dry powder",
    aroma: "Herbaceous, smoky, green"
)

skin4 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/tea.png')
tea_tree_leaf_facial_exfoliant.photos.attach(io: skin4, filename: 'tea.png')




purifying_facial_exfoliant_paste = Product.create!(
    name: "Purifying Facial Exfoliant Paste",
    category: "Skin",
    sub_category: "Exfoliant",
    description: "A cream-based cleansing formulation enhanced with fine Quartz and Lactic Acid to slough away dead skin cells and soften the skin.",
    size: "2.9 fl oz",
    price: 53.00,
    suited_to: "Most skin types, particularly dry. Frequent travellers, shavers, winter and cool climates",
    skin_feel: "Polished, softened and immaculately cleansed",
    key_ingredients: "Fine Quartz, Rosemary Leaf, Lactic Acid",
    how_to_use: "Dispense into palm then massage gently over face and neck, applying minimal pressure. Avoid eye area. Rinse thoroughly with warm water.",
    dosage: "Desired amount",
    texture: "Water-soluble cream with fine grain",
    aroma: "Herbaceous, floral, earthy"
)


skin5 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/facial.png')
purifying_facial_exfoliant_paste.photos.attach(io: skin5, filename: 'facial.png')



# # #Skin - Tone

b_and_tea_balancing_toner = Product.create!(
    name: "B & Tea Balancing Toner",
    category: "Skin",
    sub_category: "Toner",
    description: "A gentle, alcohol-free blend enhanced with Provitamin B5 and fortifying anti-oxidants. Refines pores, balances and prepares skin for hydration.",
    size: "3.4 fl oz",
    price: 35.00,
    suited_to: "Most skin types, including combination and sensitive.",
    skin_feel: "Balanced, fresh and hydrated with light finish",
    key_ingredients: "Sodium Gluconate, Panthenol, Green Tea",
    how_to_use: "Morning and evening, splash onto a cotton pad or directly into hands, and pat onto freshly cleansed face and neck.",
    dosage: "Half a teaspoon",
    texture: "Aqueous",
    aroma: "Floral, herbaceous"
)

skin6 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/b.png')
b_and_tea_balancing_toner.photos.attach(io: skin6, filename: 'b.png')




parsley_seed_anti_oxidant_facial_toner = Product.create!(
    name: "Parsley Seed Anti-Oxidant Facial Toner",
    category: "Skin",
    sub_category: "Toner",
    description: "An alcohol-free, anti-oxidant rich formulation that soothes and balances the skin while preparing it for hydration.",
    size: "6.8 fl oz",
    price: 43.00,
    suited_to: "Most skin types, including dry and mildly sensitive.",
    skin_feel: "Calm, soft and hydrated with a light finish",
    key_ingredients: "Parsley Seed, Lavender Stem, Blue Chamomile",
    how_to_use: "Morning and evening, splash onto a cotton pad or directly into hands, and pat onto freshly cleansed face and neck.",
    dosage: "Half a teaspoon",
    texture: "Aqueous",
    aroma: "Herbaceous, floral, fresh"
)

skin7 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/seed.png')
parsley_seed_anti_oxidant_facial_toner.photos.attach(io: skin7, filename: 'seed.png')



# #Skin - Treat & Masque
fabulous_face_oil = Product.create!(
    name: "Fabulous Face Oil",
    category: "Skin",
    sub_category: "Treat & Masque",
    description: "A concentrated hydrating formulation boosted with botanicals renowned for their purifying, balancing and skin-softening properties.",
    size: "0.9 fl oz",
    price: 57.00,
    suited_to: "Normal, combination, congested and dull skin",
    skin_feel: "Balanced and replenished with a smooth finish",
    key_ingredients: "Juniper Berry, Ylang Ylang, Jasmine Petal",
    how_to_use: "Morning and evening, massage into freshly cleansed and toned skin. Alternatively, blend with your preferred Aesop hydrating cream, serum or gel to intensify hydration.",
    dosage: "Three to five drops",
    texture: "Lightweight oil",
    aroma: "Floral, herbaceous"
)

skin8 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/fabulous.png')
fabulous_face_oil.photos.attach(io: skin8, filename: 'fabulous.png')




damascan_rose_facial_treatment = Product.create!(
    name: "Damascan Rose Facial Treatment",
    category: "Skin",
    sub_category: "Treat & Masque",
    description: "A concentrated blend of precious plant extracts delivering potent doses of vitamins and fatty acids. Relieves, nourishes and replenishes parched skin.",
    size: "0.9 fl oz",
    price: 75.00,
    suited_to: "Normal, dry to extremely dry, and distressed skin",
    skin_feel: "Supple and nourished with a sustained finish",
    key_ingredients: "Rose Petal, Neroli Blossom, Violet Leaf",
    how_to_use: "Three times weekly, massage into freshly cleansed and toned skin; or blend nightly with an Aesop hydrator to intensify hydration offering.",
    dosage: "Three to five drops",
    texture: "Rich, absorbing oil",
    aroma: "Floral, earthy, warm"
)

skin9 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/damascan.png')
damascan_rose_facial_treatment.photos.attach(io: skin9, filename: 'damascan.png')





chamomile_concentrate_anti_blemish_masque = Product.create!(
    name: "Chamomile Concentrate Anti-Blemish Masque",
    category: "Skin",
    sub_category: "Treat & Masque",
    description: "An astringent, clay-based masque with purifying ingredients and botanical extracts, for use on single blemishes or troubled skin.",
    size: "2.1 fl oz",
    price: 45.00,
    suited_to: "Blemished, troubled skin",
    skin_feel: "Clarified, calm and deeply cleansed",
    key_ingredients: "Chamomile Bud, Tea Tree Leaf, Evening Primrose",
    how_to_use: "Twice-weekly, apply a generous layer to freshly cleansed skin, or to single blemishes as needed. Leave for fifteen minutes, then rinse thoroughly.",
    dosage: "One to two teaspoons",
    texture: "Fine, smooth clay",
    aroma: "Herbaceous, citrus, earthy"
)

skin10 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Skin/cham.png')
chamomile_concentrate_anti_blemish_masque.photos.attach(io: skin10, filename: 'cham.png')







# # # Hair - Cleanse 

equalising_shampoo = Product.create!(
    name: "Equalising Shampoo",
    category: "Hair",
    sub_category: "Cleanse",
    description: "A balancing formulation of gently astringent botanicals that assist to remove excess oil without irritating the scalp, while delivering body and shine to hair.",
    size: "16.9 fl oz",
    price: 45.00,
    suited_to: "Oily scalps, those who lead active lifestyles and those who live in polluted urban environments",
    key_ingredients: "Fennel Fruit, Eucalyptus Leaf, Mistletoe Leaf",
    how_to_use: "Three to five times weekly, prior to shampooing, brush dry hair to loosen dirt and disentangle. Wet hair thoroughly, pour product into hands, then gently massage onto scalp. Rinse thoroughly.",
    dosage: "One to two teaspoons",
    texture: "Clear, low-foaming gel",
    aroma: "Camphorous, herbaceous, fresh"
)

hair1 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Hair/equalising.png')
equalising_shampoo.photos.attach(io: hair1, filename: 'equalising.png')



nurturing_shampoo = Product.create!(
    name: "Nurturing Shampoo",
    category: "Hair",
    sub_category: "Cleanse",
    description: "A blend of nourishing and conditioning botanical extracts including Borage and Grape Seed Oils, hydrate and tame hair to leave it glossy and soft.",
    size: "16.9 fl oz",
    price: 45.00,
    suited_to: "Dry or flaky scalps; dry, damaged, belligerent hair",
    key_ingredients: "Grape Seed, Borage Seed, Fennel Seed",
    how_to_use: "Three to five times weekly, prior to shampooing, brush dry hair to loosen dirt and disentangle. Wet hair thoroughly, pour product into hands, then gently massage onto scalp. Rinse thoroughly.",
    dosage: "One to two teaspoons",
    texture: "Creamy, low-foaming gel",
    aroma: "Mint, herbaceous, nutty"
)

hair2 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Hair/nurturing.png')
nurturing_shampoo.photos.attach(io: hair2, filename: 'nurturing.png')



calming_shampoo = Product.create!(
    name: "Calming Shampoo",
    category: "Hair",
    sub_category: "Cleanse",
    description: "A mild formulation containing botanicals known for their soothing and purifying properties to cleanse and refresh hair without irritating the scalp.",
    size: "16.9 fl oz",
    price: 45.00,
    suited_to: "Reactive, dry and distressed scalps",
    key_ingredients: "Sage Leaf, Chamomile Flower, Lemon Balm",
    how_to_use: "Prior to shampooing, brush dry hair to loosen dirt and disentangle. Wet hair thoroughly, pour product into hands, then gently massage onto scalp. Rinse thoroughly.",
    dosage: "One to two teaspoons",
    texture: "Clear, low-foaming gel",
    aroma: "Camphorous, mint, herbaceous"
)

hair3 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Hair/calming.png')
calming_shampoo.photos.attach(io: hair3, filename: 'calming.png')




volumising_shampoo = Product.create!(
    name: "Volumising Shampoo",
    category: "Hair",
    sub_category: "Cleanse",
    description: "A lifting formulation boosted with Polyquaternium 67 to assist the separation of hair shafts for volume and body, while botanical oils deliver hydration and lustre.",
    size: "16.9 fl oz",
    price: 45.00,
    suited_to: "Thin, fine or limp hair",
    key_ingredients: "Fennel Seed, Peppermint Leaf, Rosemary Leaf",
    how_to_use: "Prior to shampooing, brush dry hair to loosen dirt and disentangle. Wet hair thoroughly, pour product into hands, then gently massage onto scalp. Rinse thoroughly, expelling excess water before applying your preferred Aesop conditioner.",
    dosage: "One to two teaspoons",
    texture: "Clear, low-foaming gel",
    aroma: "Mint, herbaceous"
)

hair4 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Hair/volumising.png')
volumising_shampoo.photos.attach(io: hair4, filename: 'volumising.png')






# # # Hair - Condition

classic_conditioner = Product.create!(
    name: "Classic Conditioner",
    category: "Hair",
    sub_category: "Conditioner",
    description: "Botanical oils with impressive hydrating and hair-softening properties blend with Hydrolysed Vegetable Protein to lightly nourish, hydrate, disentangle and smooth hair.",
    size: "17 fl oz",
    price: 45.00,
    suited_to: "Most hair types, those who wash their hair frequently",
    key_ingredients: "Bergamot Mint, Cedarwood Bark, Lavender Stem",
    how_to_use: "Expel excess water from hair after shampooing. Dispense product into hands and apply to mid-lengths and ends of hair. Use a wide-toothed comb to ensure even distribution. Leave for two to three minutes before rinsing thoroughly.",
    dosage: "One to two teaspoons, more for longer hair lengths",
    texture: "Lightweight cream",
    aroma: "Camphorous, herbaceous, fresh"
)


hair5 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Hair/classic.png')
classic_conditioner.photos.attach(io: hair5, filename: 'classic.png')




volumising_conditioner = Product.create!(
    name: "Volumising Conditioner",
    category: "Hair",
    sub_category: "Conditioner",
    description: "A volume-lending blend of Polyquaternium-67 which lifts and separates hair shafts without unwanted build-up boosted with hydrating, hair-softening botanical oils.",
    size: "17 fl oz",
    price: 45.00,
    suited_to: "Fine, flat or limp hair",
    key_ingredients: "Bergamot Rind, Polyquaternium-67, Fennel Seed",
    how_to_use: "Expel excess water from hair after shampooing. Dispense product into hands and apply to mid-lengths and ends of hair. Use a wide-toothed comb to ensure even distribution. Leave for two to three minutes before rinsing thoroughly.",
    dosage: "One to two teaspoons, more for longer hair lengths",
    texture: "Lightweight cream",
    aroma: "Mint, herbaceous"
)

hair6 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Hair/hair-volumising.png')
volumising_conditioner.photos.attach(io: hair6, filename: 'hair-volumising.png')







# # # Body & Hand - Hand


reverence_aromatique_hand_balm = Product.create!(
    name: "Reverence Aromatique Hand Balm",
    category: "Body & Hand",
    sub_category: "Hand",
    description: "A rich, skin-softening balm containing carefully selected emollient ingredients, including Potassium Lactate, to soften the skin and provide sustained hydration.",
    size: "2.6 fl oz",
    price: 30.00,
    skin_feel: "Exceptionally soft with a greaseless finish",
    suited_to: "Normal to dry, fragile and chemically treated hair",
    key_ingredients: "Bergamot Rind, Vetiver Root, Petitgrain",
    how_to_use: "Apply to clean hands as often as desired, paying close attention to cuticles.",
    dosage: "Half teaspoon",
    texture: "Concentrated cream",
    aroma: "Woody, earthy, smoky"
)

body1 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Body/reverence.png')
reverence_aromatique_hand_balm.photos.attach(io: body1, filename: 'reverence.png')



resurrection_aromatique_hand_balm = Product.create!(
    name: "Resurrection Aromatique Hand Balm",
    category: "Body & Hand",
    sub_category: "Hand",
    description: "A blend of fragrant botanicals and skin-softening emollients that delivers rich hydration to labour-wearied hands and cuticles.",
    size: "2.6 fl oz",
    price: 30.00,
    skin_feel: "Nourished, supple, with a greaseless finish",
    suited_to: "Normal to dry, fragile and chemically treated hair",
    key_ingredients: "Mandarin Rind, Rosemary Leaf, Cedar Atlas",
    how_to_use: "Apply to clean hands as often as desired, paying close attention to cuticles.",
    dosage: "Half teaspoon",
    texture: "Medium-weight cream",
    aroma: "Citrus, woody, herbaceous"
)

body2 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Body/resurrection.png')
resurrection_aromatique_hand_balm.photos.attach(io: body2, filename: 'resurrection.png')




rind_concentrate_body_balm = Product.create!(
    name: "Rind Concentrate Body Balm",
    category: "Body & Hand",
    sub_category: "Body",
    description: "A citrus-based formulation with oils of Orange and Lemon Rind to cool and refresh the skin, and nut oil extracts to soften and lightly hydrate.",
    size: "4.2 fl oz",
    price: 37.00,
    skin_feel: "Swiftly absorbed, lightly hydrated",
    suited_to: "Normal to dry, fragile and chemically treated hair",
    key_ingredients: "Pink Grapefruit, Orange Rind, Lemon Rind",
    how_to_use: "Massage into freshly cleansed skin from neck to toe, particularly after sun exposure. Store in refrigerator through summer for boosted sensory pleasure.",
    dosage: "Desired amount",
    texture: "Medium-weight cream",
    aroma: "Citrus, fresh"
)

body3 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Body/rind.png')
rind_concentrate_body_balm.photos.attach(io: body3, filename: 'rind.png')



geranium_leaf_body_balm = Product.create!(
    name: "Geranium Leaf Body Balm",
    category: "Body & Hand",
    sub_category: "Body",
    description: "A rich blend of nourishing nut oils, skin-softening ingredients and Geranium Leaf and Citrus extracts to provide exceptional hydration.",
    size: "4.2 fl oz",
    price: 37.00,
    skin_feel: "Supple, soft, hydrated",
    suited_to: "Normal to dry, fragile and chemically treated hair",
    key_ingredients: "Geranium Leaf, Mandarin Rind, Bergamot Rind",
    how_to_use: "Morning and evening, massage into freshly cleansed skin from neck to toe, concentrating on dry areas such as elbows, knees and feet.",
    dosage: "Desired amount",
    texture: "Medium-weight cream",
    aroma: "Green, citrus, fresh"
)

body4 = open('https://asoap-dev.s3-us-west-1.amazonaws.com/Body/geranium.png')
geranium_leaf_body_balm.photos.attach(io: body4, filename: 'geranium.png')