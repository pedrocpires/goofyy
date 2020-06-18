# !/bin/bash
cd src/components
if [ -z $1 ]
then
    read -p "Type the new component's name: " name
else
    name=$1
fi

component=$( echo $name | sed -r 's/\b(\w)(\w*)\b/\U\1\L\2/g')

if [ -z $name ]
then
    echo "Invalid name. Please enter a name for new component"
else
    mkdir $name
    cd $name
    touch index.js
    echo "// Created by Pedro Pires [https://github.com/pedrocpires]" >> ./index.js
    echo "" >> ./index.js
    echo "import React from 'react';" >> ./index.js
    echo "import './style.css';" >> ./index.js
    echo "" >> ./index.js
    echo "function $component() {
return (
    <div className="\"$component"\">
    <h1> Hello!. $component is a new component, work on it here!</h1>
    </div>
);
}" >> ./index.js
    echo "" >> ./index.js
    echo "export default $component;" >> ./index.js

    touch style.css
    echo "/* Created by Pedro Pires [https://github.com/pedrocpires] */" >> ./style.css
    echo "" >> ./style.css
    echo "/* Create the new component's CSS style here */" >> ./style.css
    echo ".$component {
    color: gold;
}" >> ./style.css
    echo "New component successful created"
fi

echo $func
