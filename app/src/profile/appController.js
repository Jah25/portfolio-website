/**
 * Created by kitsunechrome on 11/2/15.
 */
(function (){
    angular
        .module('portfolioApp')
        .controller('portfolioCtrl', portfolioCtrl);

    function portfolioCtrl($scope, $location, $anchorScroll, $window, dataService){
        var vm= this;

        vm.processStep = 1;
        vm.setProcessStep = setProcessStep;
        vm.jump = jump;
        vm.processText = [
                            {"head":"KNOW THY FOE! (User Research)","body":"My first step in any project is to understand who the project is for and what they want from a product or service. I talk to the client to dig into their needs and expectations, I review any previously gathered interviews or data they have on their end users and I talk to the end users to understand their needs and expectations. Armed with this information I can move on to my first design iterations"},
                            {"head":"Storm Braining (Wireframing & Basic Architecture)","body":"After collecting the information I can on who needs the project and why I begin my first design iterations. First using the information I gathered in the last step, I build the information architecture of the application or service so developers have something to base their work on. Then using pencil and paper I sketch out different ideas for page structure and navigation. Once I have something I’m happy with I show it to other coworkers and the client to get their feedback."},
                            {"head":"It May Not Look Pretty Kid But It’s Got It Where It Counts (Low Fidelity Mocks)","body":"After arriving at a basic structure that the client and I are happy with I crack open Photoshop and begin putting together low fidelity mocks. I take these simple greyscale designs and use tools like Invision or Axure to give users and clients interactive samples to test. If they like it I pass these mock ups on to the development team, if not I identify the problems and tweak it until it works. Once everyone is happy I move on to giving the project its final shape."},
                            {"head":"All Shiny and Chrome (High Fidelity Mocks)","body":"After arriving at a greyscale design that meets the needs of the end user I put that layer of polish a project needs before launch. Working with any specialized UI designers and developers to make sure everything feels as great as it works."},
                            {"head":"Run It Up The Flagpole and See If Anyone Salutes (Launch)","body":"Finally, when work on the project is complete and the team is happy, we launch! I check to make sure all our analytic tools are in place so we know what users think about the new project and we celebrate a job well done!"}
                        ];
        vm.getProcessText = getProcessText;
        vm.jobs = [];
        vm.fixPosition = false;

        returnJobs();

        function jump(section){
            if($location.hash() != section){
                $location.hash(section);
            }
            else{
                $anchorScroll();
            }
        }

        function test(value, variable, type){
            if(type == 'true'){
                 return variable == value;
            }
            else{
                return variable != value;
            }
        }

        function getProcessText(value,type){
            return vm.processText[value].type;
        }

        function setProcessStep(value){
            vm.processStep = value;
        };

        function returnJobs(){

            return dataService.getJobs().then(function(response){

                vm.jobs = response.data;
                return vm.jobs;

            })
        }
    }
})();