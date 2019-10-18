//Here you must define your own listener:
//yx+z=q - podaj y, z, q oraz n dla Zn
let phase = 0;
let yzqn = {
    'y': 0,
    'z': 0,
    'q': 0,
    'n': 0,
};
let yzqnPointers = ['y', 'z', 'q', 'n']

$(function(){
    $('.enter').on('click', function(){
        colorizeSD('bg-info');
        if(phase<4){
            yzqn[yzqnPointers[phase]] = readSD();
            clearSD();
            phase++;
        } else {
            let delta = yzqn['q'] - yzqn['z'];
            if(delta < 0) delta += + yzqn['n'];
            else if(delta > yzqn['n']) delta -= yzqn['n'];
            clearSD();
            writeSD('Loading (or maybe theres an error).');
            for(let i=1; i<yzqn['n']; i++){
                if((yzqn['y']*i)%yzqn['n']===delta){
                    clearSD();
                    writeSD(i);
                }
            }
            phase = 0;
            colorizeSD('bg-success');
        }
    });
});