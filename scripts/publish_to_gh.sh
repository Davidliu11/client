# 1 remove old docs dir
rm -r docs

# 2 Build the prj
ng build --prod --base-href "client"

# 3 Make the dist folder a valid github page.
ngh

# 4 Rename the dist folder to docs for the use of github pages
mv dist docs
