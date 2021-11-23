#include<bits/stdc++.h>
using namespace std;
#define ll long long

char getAlpha(int n){
    return (96+n);
}

vector<string> alphaCode(int n){
    if(n<10){
        vector<string> ans;
        string res = "";
        if(n > 0){
            res+=getAlpha(n);
        }
        ans.push_back(res);
        return ans;
    }
    vector<string> ans1 = alphaCode(n/10);
    vector<string> ans2;
    if(n%100 <= 26){
    ans2 = alphaCode(n/100);
    }
    vector<string> final;
    for(int i=0; i<ans1.size(); i++){
        string temp = "";
        temp = ans1[i] + getAlpha(n%10);
        final.push_back(temp);
    }

    for(int i=0; i<ans2.size(); i++){
        string temp = "";
        temp = ans2[i] + getAlpha(n%100);
        final.push_back(temp);   
    }
    return final;
}

void testCase(){
    int n;
    cin>>n;
    vector<string> final = alphaCode(n);
    for(int i=0; i<final.size(); i++){
        cout<<final[i]<<endl;
    }
}

int main(){
    ll t = 1;
    ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    // cin>>t;
    while(t--){
        testCase();
    }
}