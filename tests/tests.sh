###########################################
# valid
###########################################

# period
valid_tests[0]="what's the weather?";
valid_tests[1]="what will be the weather in 2 minutes?";
valid_tests[2]="what will be the weather in 2 hours?";
valid_tests[3]="what will be the weather tomorrow?";
valid_tests[4]="what's the weather for this week end?";
valid_tests[5]="what's the weather next week?";
valid_tests[6]="what will be the weather from now to tomorrow afternoon?";

# location
valid_tests[7]="what's the weather in Random City?";
valid_tests[8]="what's the weather in Los Angeles?";
valid_tests[9]="what's the weather in Paris, France?";
valid_tests[10]="what's the weather in Paris, United States?";
valid_tests[11]="what's the weather in California?";
valid_tests[12]="what's the weather in Miami?";
valid_tests[13]="what's the weather in Algeria?";
valid_tests[14]="what's the weather in Paris, Japan?";
valid_tests[15]="what's the weather in Miami, France?";
valid_tests[16]="what's the weather in Paris, California, Japan?";
valid_tests[17]="what's the weather in Tizi-Ouzou?"; # not found in DB
invalid_tests[18]="what's the weather in Bobigny?"; # not found in DB
valid_tests[19]="what's the weather in Miami, Florida?"; # parsed to value 'Miami Florida?' with type country
valid_tests[20]="what's the weather in Paris and London?"; # parsed to value 'Paris and London?' with type country
valid_tests[21]="what's the weather in Illinois, Florida, Colorado and Texas?";  # parsed to value 'Illinois, Florida, Colorado and Texas?' with type country


########################################
# invalid
########################################

# period
invalid_tests[0]="what was the weather 5 minutes ago?";
invalid_tests[1]="what was the weather yesterday?";
invalid_tests[2]="what was the weather last week?";
invalid_tests[5]="what will be the weather in 2 weeks?";
invalid_tests[3]="what will be the weather in 3 months?";
invalid_tests[4]="what will be the weather next year?";

# location
invalid_tests[5]="what's the weather in France, Italy?"; # 2 country slots
invalid_tests[6]="what's the weather in France and Italy?"; # NLU gives value 'Italy' which !== 'Italian Republic'
