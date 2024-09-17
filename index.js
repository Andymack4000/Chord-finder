const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

//scales
const scales = document.getElementById('scales')
const scale = document.getElementById('scale')
const submit = document.getElementById('submit')

const output = document.getElementById('output')

//chords
const progressions = document.getElementById('progressions')
const chords = document.getElementById('chords')
const relativeKey = document.getElementById('relative-key')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(scales.value)
    console.log(scale.value)

    //if block to go to major or minor
    if (scale.value === 'major') {
        createMajorScale(scales.value)
    } else {
        createMinorScale(scales.value)
    }
})

function createMajorScale (scale) {
    output.textContent = ''
    chords.textContent = ''
    const majScale = []
    for (i = 0; i < 12; i++) {
        if (notes[i] === scale) {
            majScale.push(notes[i], notes[i + 2], notes[i + 4], notes[i + 5], notes[i + 7], notes[i + 9], notes[i + 11])

            majScale.forEach(note => {
                output.insertAdjacentHTML('beforeend', note + ', ')
            })

            majChords(majScale)
        } 
    } 
} 

function createMinorScale (scale) {
    output.textContent = ''
    chords.textContent = ''
    const minScale = []
    for (i = 0; i < 12; i++) {
        if (notes[i] === scale) {
            minScale.push(notes[i], notes[i + 2], notes[i + 3], notes[i + 5], notes[i + 7], notes[i + 8], notes[i + 10])
            minScale.forEach(note => {
                output.insertAdjacentHTML('beforeend', note + ', ')
            })
            
            minChords(minScale)
        }
    } 
} 

function majChords (scale) {

//use xml to print out chords
    chords.innerHTML += `
        <table>
        <tr>
        <th>Position</th> <th>Note</th> <th>Chord</th> <th>Notes of Chord</th>
        </tr>
        <tr>
        <td>I</td> <td>${scale[0]}</td> <td>Major</td> <td>${scale[0]}, ${scale[2]}, ${scale[4]}</td>
        </tr>
        <tr>
        <td>ii</td> <td>${scale[1]}</td> <td>Minor</td> <td>${scale[1]}, ${scale[3]}, ${scale[5]}</td>
        </tr>
        <tr>
        <td>iii</td> <td>${scale[2]}</td> <td>Minor</td> <td>${scale[2]}, ${scale[4]}, ${scale[6]}</td>
        </tr>
        <tr>
        <td>IV</td> <td>${scale[3]}</td> <td>Major</td> <td>${scale[3]}, ${scale[5]}, ${scale[0]}</td>
        </tr>
        <tr>
        <td>V</td> <td>${scale[4]}</td> <td>Major</td> <td>${scale[4]}, ${scale[6]}, ${scale[1]}</td>
        </tr>
        <tr>
        <td>vi</td> <td>${scale[5]}</td> <td>Minor</td> <td>${scale[5]}, ${scale[0]}, ${scale[2]}</td>
        </tr>
        <tr>
        <td>vii</td> <td>${scale[0]}</td> <td>Dim</td> <td>${scale[6]}, ${scale[1]}, ${scale[3]}</td>
        </tr>
    `
    relativeKey.insertAdjacentHTML('beforebegin', scale[5])
} 
function minChords (scale) {

//use xml to print out chords
    chords.innerHTML += `
        <table>
        <thead>
        <th>Position</th> <th>Note</th> <th>Chord</th> <th>Notes of Chord</th>
        </thead>
        <tr>
        <td>i</td> <td>${scale[0]}</td> <td>Minor</td> <td>${scale[0]}, ${scale[2]}, ${scale[4]}</td>
        </tr>
        <tr>
        <td>ii</td> <td>${scale[1]}</td> <td>Dim</td> <td>${scale[1]}, ${scale[3]}, ${scale[5]}</td>
        </tr>
        <tr>
        <td>III</td> <td>${scale[2]}</td> <td>Major</td> <td>${scale[2]}, ${scale[4]}, ${scale[6]}</td>
        </tr>
        <tr>
        <td>iv</td> <td>${scale[3]}</td> <td>Minor</td> <td>${scale[3]}, ${scale[5]}, ${scale[0]}</td>
        </tr>
        <tr>
        <td>v</td> <td>${scale[4]}</td> <td>Minor</td> <td>${scale[4]}, ${scale[6]}, ${scale[1]}</td>
        </tr>
        <tr>
        <td>VI</td> <td>${scale[5]}</td> <td>Major</td> <td>${scale[5]}, ${scale[0]}, ${scale[2]}</td>
        </tr>
        <tr>
        <td>VII</td> <td>${scale[0]}</td> <td>Major</td> <td>${scale[6]}, ${scale[1]}, ${scale[3]}</td>
        </tr>
    `
    relativeKey.insertAdjacentHTML('beforebegin', scale[2])
} 
