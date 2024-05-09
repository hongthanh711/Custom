import ObjectDesign from './components/objectDesign'
import ControllerDesign from './components/controllerDesign'

export default function Home() {
    return (
        <main>
            <div className="bg-purple-100">
                <h1 className="text-center">Case Custom</h1>
                <div className="container mx-auto">
                    <div className="flex justify-between gap-20">
                        <div>
                            <ObjectDesign />
                        </div>
                        <div className="w-1/3">
                            <ControllerDesign />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
